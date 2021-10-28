import React, { useState } from 'react';
import '../../assets/css/latestsidebar.css'
import {Sidebardata} from './sidebardata'
import logo from '../../assets/logo.png'
import { Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { left } from '@popperjs/core';


const Sidebar = () => {
    const [ showNav, setShowNav] = useState(true)

    const handlemeow = () => {
        setShowNav(!showNav)
        console.log(showNav)
    }

    return (
        <div className={showNav ? "sidebars d-none d-lg-block" : "sidebars collapsed d-none d-lg-block"}>
            <ul className="sidebarlist">
                <div className="meow row">
                    {
                        showNav ? 
                        <>
                        <div className="col-10">
                            <img className="sidebar-logo ml-2" src={logo} alt="logo"/>  
                        </div>
                        <div className="col-2">
                            <i className="fas fa-bars sidebar-icon" onClick={handlemeow}/>
                        </div>
                        </> :
                        <>
                            <i className="fas fa-bars text-center" onClick={handlemeow}/>
                        </>
                    }
                </div>
                {Sidebardata.map((val, key) => {
                    return(
                        <li key={key} 
                        className="row" 
                        onClick={() => {window.location.pathname = val.link}}
                        id={window.location.pathname === val.link ? "active" : ""}
                        > 
                        {
                            showNav ?
                            <>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                            </> : 
                            <>
                            <OverlayTrigger 
                                placement="right"
                                overlay={
                                    <Tooltip>{val.title}</Tooltip>
                                }
                            >
                            <div id="icon">{val.icon}</div>
                            </OverlayTrigger>
                            </>
                        }
                        
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
