import React from 'react';
import './mycorses.css';
import {data} from '../data/ownedcourses'
import icon from '../data/tinypic.jpg'

/*
    Основной класс называется CourseList. В нем находится функция, которая считает, сколько курсов находится в файле с данными
    и в зависимости от этого решает, какой компонент создать - CourseListWithButton или CourseListWithoutButton. Решила создать
    2 разных класса, потому что иначе получается достаточно сумбурный код.
    CourseListWithoutButton рендерит обычный список курсов размером до 6 курсов/3 строк, а CourseListWithButton делит получаемый список
    курсов на видимую и невидимцю части. В невидимой части находится кнопка "Показать все курсы", и, через смену состояний, эта часть
    появляется/исчезает при нажатии этой кнопки.

*/

class CourseList extends React.Component{
    chooseComponent=()=>{

        if (data.length<7){
            return <CourseListWithoutButton />
        }
        else {
            return <CourseListWithButton />
        }
    }

    render() {
        return(
            <div >
                {this.chooseComponent()}
            </div>
        )
    }



}

class CourseListWithoutButton extends React.Component{
    createList= () => {
        let numOfRows
        let index=0
        if (data.length%2 == 1){
            numOfRows = data.length/2+0.5
        } else {
            numOfRows = data.length/2
        }

        let row = []
        for (let i = 0; i < numOfRows; i++) {
            let template = []
            if (i == numOfRows - 1 && data.length % 2 == 1) {
                template.push(<CourseTemplate img={data[i].courseimage} title={data[i].name} type={data[index].courseType}
                                              bestScore={data[i].bestScore} topic={data[i].topic} completion={data[index].competion}/>)
            }
            else {
                for (let j = 0; j < 2; j++) {
                    template.push(<CourseTemplate img={data[i].courseimage} title={data[i].name}  type={data[index].courseType}
                                                  bestScore={data[i].bestScore} topic={data[i].topic} completion={data[index].competion}/>)
                    index++
                }
            }

            row.push(<div className="course-row">{template}</div>)
        }
        return row
    }



    render() {
        return(
            <div className="course-list">
                {this.createList()}
            </div>
        )
    }

}



class CourseListWithButton extends React.Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState(oldState => ({ showMenu: !oldState.showMenu,  background:'transparent'}));

    }



    createVisiblePart = () => { //УБРАТЬ УСЛОВИЕ
        let numOfRows = 3
        let index = 0
        let row = []
        for (let i = 0; i < numOfRows; i++) {
            let template = []
                for (let j = 0; j < 2; j++) {
                    template.push(<CourseTemplate img={data[index].courseimage} title={data[index].name} type={data[index].courseType}
                                                  bestScore={data[index].bestScore} topic={data[index].topic} completion={data[index].competion}/>)
                    index++
                }


            row.push(<div className="course-row">{template}</div>)
        }
        return row
    }


    createHiddenPart = () => {
        let row = []
        let numOfRows
        let index = 6

            if (data.length % 2 == 1) {
                numOfRows = data.length / 2 - 2.5
            } else {
                numOfRows = data.length / 2 - 3
            }

            for (let i = 0; i < numOfRows; i++) {
                let template = []
                if (i == numOfRows - 1 && data.length % 2 == 1) {
                    template.push(<CourseTemplate img={data[index].courseimage} title={data[index].name} type={data[index].courseType}
                                                  bestScore={data[index].bestScore} topic={data[index].topic} completion={data[index].competion}/>)
                } else {
                    for (let j = 0; j < 2; j++) {
                        template.push(<CourseTemplate img={data[index].courseimage} title={data[index].name} type={data[index].courseType}
                                                      bestScore={data[index].bestScore} topic={data[index].topic} completion={data[index].competion} />)
                        index++
                    }
                }
                row.push(<div className="course-row">{template}</div>);

            }


        return row

    }




    render() {

        return(
            <div className="course-list">
                <h1>Моя страница</h1>
                <div className="visible">
                    {this.createVisiblePart()}
                </div>

                {
                    this.state.showMenu
                        ? (
                            <div className="hidden">
                                {this.createHiddenPart()}
                                <div  onClick={this.showMenu} className="show-more-transparent">
                                    <button>{this.state.showMenu ? "Скрыть курсы": "Показать все курсы"}</button>
                                </div>
                            </div>

                        )
                        : (
                            <div  onClick={this.showMenu} className="show-more-gradient">
                                <button>{this.state.showMenu ? "Скрыть курсы": "Показать все курсы"}</button>
                            </div>
                        )
                }



            </div>
        )
    }

}


class CourseTemplate extends React.Component{

    render() {
        const divStyle = {
            width: this.props.completion*2.5+'px',
        };
        return(
            <div className = "course-template" >
                <div id="on-hover-course"><a>Продолжить обучение</a></div>
                <div className="course-left-half">
                    <img src={this.props.img} className="course-logo"></img>
                    <div className = "best-score"><p>Лучший результат</p><p className="score">{this.props.bestScore}<p className="hundred">/100</p></p></div>
                </div>
                <div className="course-right-half">
                    <h3 className = "course-title">{this.props.title}</h3>
                    <h4 className="course-type">{this.props.type}</h4>
                    <div className="course-icons">
                        <span>
                            <img src = {icon} className="achievement-icon"></img>
                            <img src ={icon} className="achievement-icon"></img>
                            <img src ={icon} className="achievement-icon"></img>
                        </span>
                    </div>
                    <div className = "course-progress-wrapper">
                        <div className="course-progress" style={divStyle} ><div className="course-progress-text">{this.props.completion}% завершено</div></div>
                    </div>

                    <div className = "course-achievements"></div>
                    <div className = "course-topic">
                        <p className="course-description"><h4 className="course-theme">Тема:</h4>{this.props.topic}</p>
                    </div>

                </div>

            </div>
        );
    }
}


export default CourseList;

/*


class CourseListTrial extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState(oldState => ({ showMenu: !oldState.showMenu }));
    }

    render() {
        const styles = {
            containerStyle: {
                display: this.state.display,
            }
        };
        const { containerStyle } = styles;
        return (

            <div className="space">
                <button    onClick={this.showMenu}>
                    {this.state.showMenu ? "Show less" : "Show more"}
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div style={containerStyle} className="menu">
                                <button> Menu item 1 </button>
                                <button> Menu item 2 </button>
                                <button> Menu item 3 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}



<div className="my-page">
    <h1>Моя Страница</h1>
</div>
*/


