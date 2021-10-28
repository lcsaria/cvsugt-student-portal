import React, { useState } from 'react';
import '../../assets/css/latestsidebar.css'
import {Sidebardata} from './sidebardata'
import logo from '../../assets/logo.png'


const Sidebar = () => {
    const [ showNav, setShowNav] = useState(false)
    return (
        <div className="sidebars d-none d-lg-block">
            <ul className="sidebarlist">
                <div className="meow">
                    <img className="sidebar-logo ml-2" src={logo} alt="logo"/>
                </div>

                {Sidebardata.map((val, key) => {
                    return(
                        <li key={key} 
                        className="row" 
                        onClick={() => {window.location.pathname = val.link}}
                        id={window.location.pathname === val.link ? "active" : ""}
                        > 
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
