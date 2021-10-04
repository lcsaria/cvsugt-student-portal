import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../dashboard/Dashboard.js'
import Grades from '../grades/Grades.js'
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
                <Route exact path="/grades" component={Grades}/>
            </Switch>
        </div>
    )
}

export default RouteTree
