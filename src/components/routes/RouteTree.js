import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../dashboard/Dashboard.js'
import Grades from '../grades/Grades.js'
import Home from "../home/Home.js"
import Register from '../home/Register.js'
import Subjects from '../subjects/Subjects.js'
import ProtectedRoute from './ProtectedRoute.js'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                <ProtectedRoute exact path="/subjects" component={Subjects}/>
                <ProtectedRoute exact path="/grades" component={Grades}/>
            </Switch>
        </div>
    )
}

export default RouteTree
