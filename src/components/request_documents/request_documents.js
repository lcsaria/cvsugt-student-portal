import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'

function RequestDocuments() {
    return (
        <div id="wrapper">
            <Sidebar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                <Navbar/>
                     <div className="container-fluid">
                         <div className="d-sm-flex justify-content-between align-items-center mb-4" />
                     </div>
                    <div className="container">
                        <div className="card mb-3 shadow">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">Request Documents</b>
                                </span>
                                { /* Content  Here */ }
                                <h1><i class="fas fa-hammer mr-3"/>This page is under construction.</h1>
                            </div>
                        </div>

                        

                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default RequestDocuments
