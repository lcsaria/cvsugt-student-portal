import React from 'react'
import { useHistory } from 'react-router'

function Home() {
    const history = useHistory();

    const sumbit = () => {
        localStorage.setItem("isAuthenticated", true)
        history.push("/dashboard");
    }
    return (
        <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h4 class="display-5">CvSU - General Trias</h4>
                                    <p class="text-muted mb-4">STUDENT PORTAL</p>
                                    <form onSubmit={sumbit}>
                                        <div class="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2  shadow-sm">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
            </div>
        </div>
      </div>
    )
}

export default Home
