/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();

  const logOut = () => {
    alert("Thank you!");
    localStorage.clear();
    history.push("/login");
  }
  
    return (
    <nav
        className="navbar navbar-light navbar-expand bg-white shadow topbar sticky-top"
        style={{ boxShadow: "0px 4px 5px", height: "3rem"}}
      >
        <div className="container-fluid" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-item ">
                <a
                  className="btn-outline-light"
                  aria-expanded="false"
                  onClick={logOut}
                >
                  <span className="d d-lg-inline mb-4 mr-2 text-gray-600 small">
                  <span className="fa fa-sign-out mr-2" aria-hidden="true"/>
                    Logout
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
