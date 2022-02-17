import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import { Spinner } from 'react-bootstrap';
import axios from '../../api/api'

function Deficiency() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.post('deficiency')
        .then(res => {
            setData(res.data)
            console.log(res.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            console.log('data : ',data);
        })
    },[]) 
    
    const renderTable = () => {
        return data.filter(meow => {
            if (meow.grade.includes('INC')) return meow
            else if (meow.grade.includes('DRP')) return meow
        }).map(meow => {
            return (
                <tr key = {meow.num}>
                    <td data-label="Subject Code : ">{meow.subject_code}</td>
                    <td data-label="Description : ">{meow.subject_title}</td>
                    <td data-label="Grade : ">{meow.grade}</td>
                    <td data-label="Units : ">{meow.units}</td>
                </tr>
            )
        })
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
                        <div className="card mb-3 shadow">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">Deficiency</b>
                                </span>
                                { /* Content  Here */ }
                                {
                                    (!data.length) ?
                                    <div className="text-center">NO DEFICIENCY AVAILABLE</div>
                                    :
                                    <div className="table-holder">
                                        <table className="table">
                                            {
                                                (loading) ?
                                                <div className="d-flex justify-content-center">
                                                    <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                                                </div>
                                                :
                                            <>
                                                <thead>
                                                    <tr>
                                                        <th>Subject Code</th>
                                                        <th>Description</th>
                                                        <th>Grade</th>
                                                        <th>Unit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {renderTable()}
                                                </tbody>
                                                
                                            </>
                                            }
                                        </table>
                                        <div>*Note : For those who have deficiency, please coordiate to your adviser.</div>
                                    </div>
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

export default Deficiency
