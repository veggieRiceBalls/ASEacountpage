import React from 'react';
import './achievements.css'
class AchievementTemplate extends React.Component {
    render() {
        return (
            <div className="achievement-template">
                <div className="on-hover-achievement"><h4>{this.props.title}</h4><p>{this.props.text}</p></div>
                <img src ={this.props.image} className="achievement-image"></img>
            </div>
        );
    }
}

class Achievements extends React.Component {
    render() {
        return (
            <div className="achievements-wrapper">
                <span className="achievements-row"  >
                <AchievementTemplate image = "https://i.ibb.co/mzpCG5H/300px.jpg" text="Для того, чтобы получить это достижение, надо быть очень умным!!" title="Красавчик!"/>
                <AchievementTemplate image = "https://i.ibb.co/mzpCG5H/300px.jpg" text="Для того, чтобы получить эту ачивку, надо быть очень умным!!" title="Красавчик!"/>
                <AchievementTemplate image = "https://i.ibb.co/mzpCG5H/300px.jpg" text="Для того, чтобы получить эту ачивку, надо быть очень умным!!" title="Красавчик!"/>
                </span>
            </div>
        );
    }
}
export default Achievements;