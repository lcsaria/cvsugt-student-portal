import React from 'react'

export const Sidebardata = [
    {
        title : 'Student Profile',
        icon : <i className="fas fa-user-graduate "/>,
        link : '/dashboard',
    },
    {
        title : 'Enrolled Subjects',
        icon : <i className="fas fa-book-open "/>,
        link : '/subjects',
    },
    {
        title : 'List of Grades',
        icon : <i className="fas fa-table"/>,
        link : '/grades',
    },
    {
        title : 'Deficiency',
        icon : <i className="fas fa-exclamation-triangle "/>,
        link : '/deficiency',
    },
    {
        title : 'Subjects Portal',
        icon : <i className="fas fa-scroll "/>,
        link : '/schedule',
    },
    /*
    {
        title : 'Change Subject',
        icon : <i className="fas fa-file-signature "/>,
        link : '/addsubject',
    },
    */
    {
        title : 'Online Enrollment',
        icon : <i className="fas fa-file "/>,
        link : '/enrollment',
    },
    {
        title : 'Request Documents',
        icon : <i className="fas fa-file-download "/>,
        link : '/request',
    },
]
    