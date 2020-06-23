import React from 'react';
import './SideMenu.css';
import ASElogo from './ASE_logo.jpg';
import axios from 'axios';
import cors

const cors = require('cors');
const express = require('express');
let app = express();
app.use(cors());
app.options('*', cors());

/** Боковое меню **/

class SideMenuHeader extends React.Component{
    render(){
        return(
            <a className = "side-menu-header" href ="https://i.ibb.co/ZcMth1k/Michelangelos-David.jpg" alt="Michelangelos-David">
                <img className ="side-menu-header-img" src={ASElogo}></img>
                <h4 className = "side-menu-header-text">Образовательная платформа</h4>
            </a>
        );
    }
}

class SideMenuName extends React.Component{
    render(){
        return(
            <div className = "side-menu-profile">
                <div className = "side-menu-profile-main-info" >
                    <img src={this.props.image} className="side-menu-profile-main-info-img"></img>
                    <h4 className = "side-menu-profile-main-info-name">{this.props.name}</h4>
                </div>
                <div className = "side-menu-profile-status">
                 <h4>{this.props.status}</h4>
                </div>
                <div className = "side-menu-profile-extra-info">
                    <p>{this.props.extrainfo}</p>
                </div>
            </div>
        );
    }
}

/** Ссылки пока не работают (вместо них h4) **/
class SideMenuListLine extends React.Component{
    render(){
        return(
        <div className="side-menu-wrapper">
            <h4 className = "side-menu-list-line-text">{this.props.name}</h4>
            </div>
        );
    }
}

class  SideMenu extends React.Component {
    state = {
        user_info: []
    }

    componentDidMount(){
    axios.get('http://localhost:5000/account/1').then(res => {
        console.log(res)
        this.setState({ user_info: res.data})
    })
   }

    render() {
        return (
            <div className="menu-wrapper">
                <div  className="side-bar">
                    <SideMenuHeader/>
                    <SideMenuName name = {this.state.user_info[0]} status={this.state.user_info[1]} extrainfo = {"У вас скоро истечет подписка"} image = "https://i.ibb.co/mzpCG5H/300px.jpg"  />
                    <div className ="side-menu-list">
                        <SideMenuListLine  name={"Мой Road Map"} />
                        <SideMenuListLine  name={"Мои достижения"} />
                        <SideMenuListLine  name={"Профориентация"} />
                        <SideMenuListLine  name={"Новости платформы"} />
                        <SideMenuListLine  name={"Техподдержка"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SideMenu;