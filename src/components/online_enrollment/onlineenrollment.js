import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import axios from '../../api/api'

function Online_enrollment() {
    const [enrollmentMethod, setEnrollmentMethod] = useState(true);
    const [checkpoint, setCheckpoint] = useState(false);
    const [ys, setys] = useState([])

    useEffect(() => {
        let id = localStorage.getItem('student_number');
        let course = localStorage.getItem('course');
        axios.get(`checkenrollment/${id}`)
        .then(response => {
            console.log(response.data);
            setCheckpoint(true)
        })
        .catch(err => {
            console.log(err);
            alert('you are not qualified to use this function. please contact your registrar.')
            window.location.href = '/dashboard'
        })
        axios.get(`yearandsection/${course}`)
        .then(response => {
            setys(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const meow = () => {
        setEnrollmentMethod(!enrollmentMethod)
    }
    const fastenroll = () => {
        let id = localStorage.getItem('student_number');
        axios.post(`fastenrollment/${id}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    const manualenroll = () => {
        alert('under maintenance')
        if (!document.getElementById('code1').value && !document.getElementById('code2').value && !document.getElementById('code3').value && !document.getElementById('code4').value && !document.getElementById('code5').value && !document.getElementById('code6').value && !document.getElementById('code7').value && !document.getElementById('code8').value && !document.getElementById('code9').value) alert('add atleast 1 subject code.');
        else{
            // process for enrollment. 
            var ror = []
            var meow = {}
            if (document.getElementById('code1').value != ''){
                meow = {}
                meow.subject = document.getElementById('code1').value
                ror.push(meow)
            }
            if (document.getElementById('code2').value != ''){
                meow = {}
                meow.subject = document.getElementById('code2').value
                ror.push(meow)
            }
            if (document.getElementById('code3').value != ''){
                meow = {}
                meow.subject = document.getElementById('code3').value
                ror.push(meow)
            }
            if (document.getElementById('code4').value != ''){
                meow = {}
                meow.subject = document.getElementById('code4').value
                ror.push(meow)
            }
            if (document.getElementById('code5').value != ''){
                meow = {}
                meow.subject = document.getElementById('code5').value
                ror.push(meow)
            }
            if (document.getElementById('code6').value != ''){
                meow = {}
                meow.subject = document.getElementById('code6').value
                ror.push(meow)
            }
            if (document.getElementById('code7').value != ''){
                meow = {}
                meow.subject = document.getElementById('code7').value
                ror.push(meow)
            }
            if (document.getElementById('code8').value != ''){
                meow = {}
                meow.subject = document.getElementById('code8').value
                ror.push(meow)
            }
            if (document.getElementById('code9').value != ''){
                meow = {}
                meow.subject = document.getElementById('code9').value
                ror.push(meow)
            }
            if (document.getElementById('code10').value != ''){
                meow = {}
                meow.subject = document.getElementById('code10').value
                ror.push(meow)
            }
            console.log(ror);
            let id = localStorage.getItem('student_number');
            axios.post(`enrollment/${id}`, ror)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    return (
        (checkpoint) ?
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
                                <b className="text-uppercase text-black">Online Enrollment</b>
                                </span> 
                                { /* content here */ }
                                <FloatingLabel controlId="floatingSelect" label="Enrollment Method">
                                    <Form.Select aria-label="enrollment type" onChange={() => meow()}>
                                        <option value="true">Fast Enrollment</option>
                                        <option value="false">Manual Enrollment</option>
                                    </Form.Select>
                                </FloatingLabel>
                                {
                                    (enrollmentMethod) ?
                                    <div className='mt-4'>
                                        <FloatingLabel label="Year and Section">
                                            <Form.Select aria-label="year">
                                                <option value='a' disabled hidden selected>--</option>
                                                {ys.map((meow) => <option key={meow.section} value={meow.section}>{meow.section}</option>)}
                                                
                                            </Form.Select>
                                        </FloatingLabel>
                                        <div>
                                        * fast enrollment means you are enrolling all subjects in selected section for [semester], AY, [ay].
                                        </div>
                                        <Button variant='success' className="mt-3" onClick={() => fastenroll()}>Enroll Now</Button>
                                    </div>
                                    
                                    :
                                    <div className='mt-4'>
                                        <div>
                                        Enter list of subject codes (check subject portal for subject codes)
                                        <Form>
                                            <Form.Group className="mt-2" controlId="formscode1">
                                                <Form.Control type="number" id="code1" placeholder="Enter Subject Code 1" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode2">
                                                <Form.Control type="number" id="code2" placeholder="Enter Subject Code 2" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode3">
                                                <Form.Control type="number" id="code3" placeholder="Enter Subject Code 3" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode4">
                                                <Form.Control type="number" id="code4" placeholder="Enter Subject Code 4" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode5">
                                                <Form.Control type="number" id="code5" placeholder="Enter Subject Code 5" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode6">
                                                <Form.Control type="number" id="code6" placeholder="Enter Subject Code 6" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode7">
                                                <Form.Control type="number" id="code7" placeholder="Enter Subject Code 7" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode8">
                                                <Form.Control type="number" id="code8" placeholder="Enter Subject Code 8" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode9">
                                                <Form.Control type="number" id="code9" placeholder="Enter Subject Code 9" />
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode10">
                                                <Form.Control type="number" id="code10" placeholder="Enter Subject Code 10" />
                                            </Form.Group>
                                        </Form>
                                        </div>

                                        <Button variant='success' className="mt-2" onClick={() => manualenroll()}>Enroll Now</Button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
        : 
        <div></div>
    )
}

export default Online_enrollment
