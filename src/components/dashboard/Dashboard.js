import React from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/Sidebar'

function Dashboard() {
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
        
      <div class="card mb-1">
        <div class="card-body">
            <h5 class="card-title">BASIC INFORMATION</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>

        <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>

        <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>
    )
}

export default Dashboard
