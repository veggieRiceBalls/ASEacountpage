import React from 'react';
import './recommendedcourses.css'
import {data1} from "../data/recommendations";

/** Шаблон для рекоммендованных курсов. Берет данные из json-файла и выводит их.**/


class RecommendedTemplate extends React.Component{
    render(){
    return(
        <div className="recommended-block">
                <img src={this.props.img} className="recommended-logo"></img>

                <div className="recommended-right-half">
                    <h3 className="recommended-title">{this.props.title}</h3>
                    <h4 className="recommended-type">{this.props.type}</h4>
                    <p className="recommended-description">{this.props.topic}</p>
                </div>

        </div>
    );
    }
}

class RecommendedButton extends React.Component{
    render() {
        return (
            <div className="recommended-button-background">
                <button className="recommended-button">Все курсы</button>
            </div>
        );
    }}


class RecommendedList extends React.Component {

    createList=()=>{
        let row = []
        let numOfRows
        let index = 0


        if (data1.length%2 == 1){
            numOfRows = data1.length/2+0.5
        } else {
            numOfRows = data1.length/2
        }


            for (let i = 0; i < numOfRows; i++) {
                let template = []
                if (i == numOfRows - 1 && data1.length % 2 == 1) {
                    template.push(<RecommendedTemplate img={data1[index].courseimage} title={data1[index].name} topic={data1[index].topic} type={data1[index].courseType}/>)
                } else {
                    for (let j = 0; j < 2; j++) {
                        template.push(<RecommendedTemplate img={data1[index].courseimage} title={data1[index].name} topic={data1[index].topic} type={data1[index].courseType}/>)
                        index++
                    }
                }
                row.push(<div className="course-row">{template}</div>);

            }
            row.push(<RecommendedButton />)



        return row
    }

    render() {
        return(
            <div className="recommended-list">
                <h1>Курсы, которые могут быть вам интересны</h1>
                {this.createList()}
            </div>
        )
    }

}



export default RecommendedList;