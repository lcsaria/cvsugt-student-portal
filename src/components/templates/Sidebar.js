import React, { useState } from 'react';
import '../../assets/css/latestsidebar.css'
import {Sidebardata} from './sidebardata'
import logo from '../../assets/logo.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


const Sidebar = () => {
    const [ showNav, setShowNav] = useState(true)

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
                        <div className="col-2" onClick={() => {setShowNav(!showNav)}}>
                            <i className="fas fa-bars sidebar-icon" />
                        </div>
                        </> :
                        <>
                            <div className="text-center" onClick={() => {setShowNav(!showNav)}}>
                                <i className="fas fa-bars " />
                            </div>
                            
                        </>
                    }
                </div>
                {Sidebardata.map((val, key) => {
                    return(
                        <li key={key} 
                        className="row" 
                        onClick={() => { (val.link === "/request") ?  window.open(val.link, '_blank') : window.location.pathname = val.link}}
                        id={window.location.pathname === val.link ? "active" : ""}
                        > 
                        {
                            showNav ?
                            <>
                            <div id="icon">{val.icon}</div>
                            <div id="title"><b>{val.title}</b></div>
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
