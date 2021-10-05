/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import logo from '../../assets/school-logo-small.png'
import { useHistory } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed' || false);
  const [isExpanded, setIsExpanded] = React.useState(sidebarCollapsed ? false : true);
  const history = useHistory();
  const [width, setWidth]   = useState(window.innerWidth);

  const logOut = () => {
    alert("Thank you!");
    localStorage.clear();
    history.push("/login");
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  }
  
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  return(
    <div 
      className={isExpanded ? "Sidebar sidebar-text" : "Sidebar sidebar-text collapsed"}>
      <div className={isExpanded ? "sidebar-header" : "sidebar-header mt-2"}>
        {
           (width > 600) ?
           <i className="fas fa-bars sidebar-icon mt-2 ml-1" onClick={handleToggler}/>
           :
           <i className="fas fa-bars sidebar-icon mt-2 ml-1" />
        }
        
        <img className="sidebar-logo ml-4" src={logo} alt="logo" width="25%"/>
        <br className="line"/>
      </div>
      {
        isExpanded ? 
        <>
        <a className={isExpanded ?"nav-link": "nav-link mt-3"} href="/dashboard">  
          <div className="sidebar-items">
            <div className="item">
              <i className="fas fa-home mr-4"/>
              <span className="sidebar-text">Home</span>
            </div>
            </div>
          </a>
           <a className={isExpanded ? "nav-link": "nav-link mt-2"} href="/subjects">  
           <div className="sidebar-items">
             <div className="item">
               <i className="fas fa-book mr-4"/>
               <span className="sidebar-text">Subjects</span>
             </div>
             </div>
           </a>
           <a className={isExpanded ?"nav-link": "nav-link mt-2"} href="/grades">  
           <div className="sidebar-items">
             <div className="item">
               <i className="fas fa-newspaper mr-4"/>
               <span className="sidebar-text">Grades</span>
             </div>
             </div>
           </a>
           <a className={isExpanded ?"nav-link": "nav-link mt-2"} onClick={logOut}> 
           <div className="sidebar-items">
             <div className="item">
               <i className="fas fa-sign-out-alt mr-4"/>
               <span className="sidebar-text">Log-out</span>
             </div>
           </div>
           </a>
           </>
        :
          <>
            <OverlayTrigger 
                  placement="right"
                  overlay={
                    <Tooltip>Home</Tooltip>
                  }
            >
            <a className={isExpanded ?"nav-link": "nav-link mt-3"} href="/dashboard">  
            <div className="sidebar-items">
              <div className="item">
                <i className="fas fa-home mr-4"/>
                <span className="sidebar-text">Home</span>
              </div>
              </div>
            </a>
            </OverlayTrigger>
            <OverlayTrigger 
                  placement="right"
                  overlay={
                    <Tooltip>Subjects</Tooltip>
                  }
            >
            <a className={isExpanded ? "nav-link": "nav-link mt-2"} href="/subjects">  
            <div className="sidebar-items">
              <div className="item">
                <i className="fas fa-book mr-4"/>
                <span className="sidebar-text">Subjects</span>
              </div>
              </div>
            </a>
            </OverlayTrigger>
            <OverlayTrigger 
                  placement="right"
                  overlay={
                    <Tooltip>Grades</Tooltip>
                  }
            >
            <a className={isExpanded ?"nav-link": "nav-link mt-2"} href="/grades">  
            <div className="sidebar-items">
              <div className="item">
                <i className="fas fa-newspaper mr-4"/>
                <span className="sidebar-text">Grades</span>
              </div>
              </div>
            </a>
            </OverlayTrigger>
            <OverlayTrigger 
                  placement="right"
                  overlay={
                    <Tooltip>Log-out</Tooltip>
                  }
            >
            <a className={isExpanded ?"nav-link": "nav-link mt-2"} onClick={logOut}> 
            <div className="sidebar-items">
              <div className="item">
                <i className="fas fa-sign-out-alt mr-4"/>
                <span className="sidebar-text">Log-out</span>
              </div>
            </div>
            </a>
            </OverlayTrigger>
          </>
      }

    </div>
  );
}

export default Sidebar
