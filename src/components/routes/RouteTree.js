import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../dashboard/Dashboard.js'
import Home from "../home/Home.js"
import Subjects from '../subjects/Subjects.js'
import ProtectedRoute from './ProtectedRoute.js'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/subjects" component={Subjects}/>
            </Switch>
        </div>
    )
}

export default RouteTree
