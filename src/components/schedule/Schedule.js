import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/Sidebar'
import api from '../../api/axios'
import { Spinner } from 'react-bootstrap'

function Schedule() {
const [data, setData] = useState([])
const [sectionlist, setSectionlist] = useState([])
const [loading, setLoading] = useState(false)
const [search,setSearch] = useState()
const [section, setSection] = useState()

    useEffect( () => {
        setLoading(true)
        api.get('offeredSubjects')
        .then(response => {
            setData(response.data)
            console.log(response.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.data)
            setLoading(false)
        })
        api.get('sectionsforsubject')
        .then(response => {
            setSectionlist(response.data)
            console.log('data : ',response.data)
        })
        .catch(err => {
            console.log(err)
            setSectionlist('')
        })
    },[])

    const searchSched = () => {
        let sect = document.getElementById('section').value
        let search = document.getElementById('search').value
        
       console.log(sect)
       console.log(search)

       //1st condition: if none of them are clicked
        if (sect === "default" && search === ""){
            setSearch("")
            setSection("")
            renderTable()
            
        }
        //2nd condition: if section is selected 
        else if (sect !== "default" && search === ""){
            setSearch("")
            setSection(sect)
            renderTable()
        } 
        //3rd condition: if search is selected 
        else if (sect === "default" && search !== ""){
            setSearch(search)
            setSection("")
            renderTable()
        }
        //last condition: if both are selected 
        else if (sect !=="default" && search !== ""){
            setSearch(search)
            setSection(section)
            renderTable()
        }
        
    }
    const renderTable = () => {
        // eslint-disable-next-line array-callback-return
        return data.filter(user => {
            if (!section && !search){
                return user
            } else if (section === "default" && search === ""){
                return user
            } else if(search === "" && user.section.includes(section)){
                return user
            } else if(section === "" && user.subject_code.includes(search)){
                return user
            } else if(section === "" && user.subject_code.includes(search)){
                return user
            } else if(section !== "" && search !== ""){
                if (user.section.includes(section) && user.subject_code.includes(search))
                return user
            } 
        }).map(user => {
            return(
                <tr key = {user.num}>
                    <td data-label="Subject code : ">{user.subject_code}</td>
                    <td data-label="Title : ">{user.subject_title}</td>
                    <td data-label="Schedule code : "><a className="text-success text-middle" href = {`masterlist/?id=${user.sched_code}`} target = "_blank" rel="noreferrer"><b>{user.sched_code}</b></a></td>
                    <td data-label="Section : ">{user.section}</td>
                    <td data-label="Units : ">{user.credit_unit_lec + user.credit_unit_lab}</td>
                </tr>
            )
        })
    }

   
    // dito code for dropdown onchange
    const sections = () => {
        console.log('you click me');
    }



    
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
                        <div className="card mb-3">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">SUBJECT PORTAL</b>
                                </span>
                                <div className="input-group rounded">
                                    <input id="search" type="search" autocomplete="off" className="form-control rounded" placeholder="Enter subject code..." aria-label="Search" aria-describedby="search-addon" />
                                        <span className="input-group-text border-0" id="search-addon">
                                            <i className="fas fa-search"/>
                                        </span>
                                </div>
                                    <select className="form-control mt-4" defaultValue="default" id="section">
                                    <option value="default" selected>---</option>
                                    {sectionlist.map((gender) => <option key={gender.num} value={gender.section}>{gender.section}</option>)}
                                    </select>
                                    <div className="mt-4">
                                        <button className="form-control btn-bg-dark" onClick={searchSched}>
                                            SEARCH
                                         </button>
                                    </div>
                                    
                                    {
                                        (loading) ?
                                        <div className="d-flex justify-content-center mt-4">
                                            <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                                        </div>
                                        :
                                        <>
                                        <div className="mt-3 table-holder">
                                        <table className="table" id="dataTable">
                                        <thead>
                                            <tr>
                                            <th>SUBJECT CODE</th>
                                            <th>TITLE</th>
                                            <th>SCHEDULE CODE</th>
                                            <th>SECTION</th>
                                            <th>UNITS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTable()}
                                        </tbody>
                                        </table>
                                        </div>
                                        </>
                                    }
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
