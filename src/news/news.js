import React from 'react';
import './news.css'
import {news} from "../data/news";

/*
    Компоненты для создания грида с новостями
   Основная компонента - NewsGrid, сначала в ней запускается функция chooseGrid(), которая в зависимости от размера массива с
   данными запускает  одну из функций, рендерящих гриды разного размера. Пока что в классе нет нормальной сортировки новостей
   по дате и значимости.

*/


class NewsList extends React.Component {
    chooseGrid=()=>{
        if (news.length == 1){
            return this.createGridOfSize1()
        }
        if (news.length ==2 ) {
            return this.createGridOfSize2()
        }
        if (news.length == 3 ){
            return this.createGridOfSize3()
        }
        if (news.length == 4 ){
            return this.createGridOfSize4()
        }
        if (news.length > 4 ){
            return this.createGridWithGradient()
        }
    }


    createGridOfSize1= ()=>{
        return <div>
            <div className="grid-parent-regular">
                <div className="grid-1-div1">
                    <NewsBigTemplate img={news[0].image} title={news[0].title} text={news[0].text} date={news[0].date}/>
                </div>
            </div>
            <div  className="show-news-transparent">
                <button className="show-news">Читать все новости</button>
            </div>
        </div>
    }


    createGridOfSize2= ()=>{
        return <div>
            <div className="grid-parent-regular">
                <div className="grid-2-div1"><NewsBigTemplate img={news[0].image} title={news[0].title} text={news[0].text} date={news[0].date}/></div>
                <div className="grid-2-div2"><NewsRegularTemplate img={news[1].image} title={news[1].title} text={news[1].text} date={news[1].date}/></div>
            </div>
            <div  className="show-news-transparent">
                <button className="show-news">Читать все новости</button>
            </div>
        </div>
    }



    createGridOfSize3= ()=> {
        return <div>
            <div className="grid-parent-regular">
                <div className="grid-3-div1"><NewsBigTemplate img={news[0].image} title={news[0].title} text={news[0].text} date={news[0].date}/></div>
                <div className="grid-3-div2"><NewsRegularTemplate img={news[1].image} title={news[1].title} text={news[1].text} date={news[1].date}/></div>
                <div className="grid-3-div3"><NewsRegularTemplate img={news[2].image} title={news[2].title} text={news[2].text} date={news[2].date}/></div>
            </div>
            <div  className="show-news-transparent">
                <button className="show-news">Читать все новости</button>
            </div>
        </div>

    }

    createGridOfSize4 = ()=> {
        return <div>
            <div className="grid-parent-regular">
                <div className="grid-4-div1"><NewsBigTemplate img={news[0].image} title={news[0].title} text={news[0].text} date={news[0].date}/></div>
                <div className="grid-4-div2"><NewsRegularTemplate img={news[1].image} title={news[1].title} text={news[1].text} date={news[1].date}/></div>
                <div className="grid-4-div3"><NewsRegularTemplate img={news[2].image} title={news[2].title} text={news[2].text} date={news[2].date}/></div>
                <div className="grid-4-div4"><NewsMediumTemplate img={news[3].image} title={news[3].title} text={news[3].text} date={news[3].date}/></div>
            </div>
            <div  className="show-news-transparent">
                <button className="show-news">Читать все новости</button>
            </div>

        </div>

    }

    createGridWithGradient= ()=> {
        let result=[]
        let index=4
        let numOfNews = Math.min(news.length, 8)- 4

        result.push(<div className="grid-4-div1"><NewsBigTemplate img={news[0].image} title={news[0].title} text={news[0].text} date={news[0].date}/></div>)
        result.push(<div className="grid-4-div2"><NewsRegularTemplate img={news[1].image} title={news[1].title} text={news[1].text} date={news[1].date}/></div>)
        result.push(<div className="grid-4-div3"><NewsRegularTemplate img={news[2].image} title={news[2].title} text={news[2].text} date={news[2].date}/></div>)
        result.push(<div className="grid-4-div4"><NewsMediumTemplate img={news[3].image} title={news[3].title} text={news[3].text} date={news[3].date}/></div>)
        for (let i = 0; i < numOfNews; i++) {
            result.push(<div className={'grid-extra'+(index+1)}><NewsExtraTemplate img={news[index].image} title={news[index].title} text={news[index].text} date={news[index].date}/></div>)
            index++
        }

        return <div className="grid-parent-extra">
            {result}
            <div  className="show-news-gradient">
                <button>Читать все новости</button>
            </div>
        </div>

    }

    render() {
        return(
            <div className = "news-wrapper">
                {this.chooseGrid()}
            </div>
        )
    }
}


/** Отдельные шаблоны новостей, различающиеся по размеру **/

class NewsBigTemplate extends React.Component {
    render() {
        return (
            <div className="news-big-template">
                <img src={this.props.img} className="news-big-picture"></img>
                <div className="news-big-content">
                    <div className = "news-big-title"><p>{this.props.title}</p></div>
                    <div className = "news-big-text"><p>{this.props.text}</p></div>
                </div>
            </div>
        );
    }
}


class NewsMediumTemplate extends React.Component {
    render() {
        return (
            <div className="news-medium-template">
                <img src={this.props.img} className="news-medium-picture"></img>
                <div className="news-medium-content">
                    <div className = "news-medium-title"><p>{this.props.title}</p></div>
                    <div className = "news-medium-text"><p>{this.props.text}</p></div>
                </div>
                <div className = "news-medium-date"><p>{this.props.date}</p></div>
            </div>
        );
    }
}


class NewsRegularTemplate extends React.Component {
    render() {
        return (
            <div className="news-regular-template">
                <img src={this.props.img} className="news-regular-picture"></img>
                <div className="news-regular-content">
                    <div className = "news-regular-title"><p>{this.props.title}</p></div>
                    <div className = "news-regular-text"><p>{this.props.text}</p></div>
                </div>
                <div className = "news-regular-date"><p>{this.props.date}</p></div>
            </div>
        );
    }
}
class NewsExtraTemplate extends React.Component {
    render() {
        return (
            <div className="news-extra-template">
                <img src={this.props.img} className="news-regular-picture"></img>
            </div>
        );
    }
}


export default NewsList;
