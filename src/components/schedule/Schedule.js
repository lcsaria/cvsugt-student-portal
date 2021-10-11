import React from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/Sidebar'

function Schedule() {
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
                        <div class="card">
                            <div class="card-body">
                                <div class="input-group rounded">
                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <span class="input-group-text border-0" id="search-addon">
                                            <i class="fas fa-search"/>
                                        </span>
                                </div>
                                    <select className="form-control mt-4">
                                        <option className="form-control" value="1">One</option>
                                        <option className="form-control" value="2">Two</option>
                                        <option  className="form-control" value="3">Three</option>
                                    </select>
                                    <div className="mt-4">
                                        <button className="form-control btn-bg-dark">
                                            SEARCH
                                         </button>
                                    </div>
                                    <div className="card mt-3 table-holder">
                                        <table className="table my-0 table-striped table-hover" id="dataTable">
                                            <thead>
                                                <tr>
                                                <th>Subject Code</th>
                                                <th>Description</th>
                                                <th>Grade</th>
                                                <th>Completion</th>
                                                <th>Unit</th>
                                                <th>Credit Unit</th>
                                                </tr>
                                            </thead>
                                            </table>
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Schedule
