import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../dashboard/Dashboard.js'
import Grades from '../grades/Grades.js'
import Home from "../home/Home.js"
import Register from '../home/Register.js'
import Schedule from '../schedule/Schedule.js'
import Subjects from '../subjects/Subjects.js'
import masterlist from '../masterlist/masterlist.js'
import ProtectedRoute from './ProtectedRoute.js'
import settings from '../settings/settings'
import requestdocu from '../request_documents/request_documents'
import addsubject from '../addsubject/addsubject'
import onlineenrollment from '../online_enrollment/onlineenrollment'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                <ProtectedRoute exact path="/schedule" component={Schedule}/>
                <ProtectedRoute exact path="/subjects" component={Subjects}/>
                <ProtectedRoute exact path="/grades" component={Grades}/>
                <ProtectedRoute exact path="/masterlist" component={masterlist}/>
                <ProtectedRoute exact path="/settings" component={settings}/>
                <ProtectedRoute exact path="/request" component={requestdocu}/>
                <ProtectedRoute exact path="/addsubject" component={addsubject}/>
                <ProtectedRoute exact path="/enrollment" component={onlineenrollment}/>
            </Switch>
        </div>
    )
}

export default RouteTree
