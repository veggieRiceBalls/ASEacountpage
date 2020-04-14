import React from 'react';
import "./footer.css"

/** Компонента футера**/

class Footer extends React.Component {
    render(){
        return(

            <div className = "footer-wrapper">
                <a className="footer-agreement">Пользовательское соглашение</a>
                <p className ="footer-license">©2019 Образовательная платформа ASE Platform. All rights reserved.</p>
            </div>

        );
    }
}

export default Footer;