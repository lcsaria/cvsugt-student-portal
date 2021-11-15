import React, {useState, useEffect} from 'react'
import Navbar from './templates/Navbar'
import Footer from './templates/Footer'
import Sidebar from './templates/sidebar'
import {Button} from 'react-bootstrap'

function NotFound() {
    return (
        <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                     <div className="container-fluid">
                         <div className="d-sm-flex justify-content-between align-items-center mb-4" />
                     </div>
                    <div className="container">
                        
                        <h1><i class="fas fa-exclamation-triangle mr-3"/>PAGE NOT FOUND.</h1>
                        <Button variant="success" onClick={()=> window.location.href = '/dashboard'}>
                            Back to Homepage
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
