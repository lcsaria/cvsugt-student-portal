import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import { Form, FloatingLabel, Button } from 'react-bootstrap';

function Online_enrollment() {
    const [enrollmentMethod, setEnrollmentMethod] = useState(true);
    const [subject, setSubject] = useState();
    const meow = () => {
        setSubject("")
        setEnrollmentMethod(!enrollmentMethod)
    }
    const fastenroll = () => {
        alert('under maintenance')
    }
    const manualenroll = () => {
        alert('under maintenance')
        console.log(subject);
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
                                        <div>
                                        * fast enrollment means you are enrolling to same section for first semester, AY, 2021-2022.
                                        </div>

                                        <Button variant='success' className="mt-2" onClick={() => fastenroll()}>Enroll Now</Button>
                                    </div>
                                    
                                    :
                                    <div className='mt-4'>
                                        <div>
                                        Enter list of subject codes (check subject portal for subject codes)
                                        <Form>
                                            <Form.Group className="mt-2" controlId="formscode1">
                                                <Form.Control type="text" id="code1" placeholder="Enter Subject Code 1" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject1 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode2">
                                                <Form.Control type="text" id="code2" placeholder="Enter Subject Code 2" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject2 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode3">
                                                <Form.Control type="text" id="code3" placeholder="Enter Subject Code 3" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject3 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode4">
                                                <Form.Control type="text" id="code4" placeholder="Enter Subject Code 4" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject4 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode5">
                                                <Form.Control type="text" id="code5" placeholder="Enter Subject Code 5" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject5 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode6">
                                                <Form.Control type="text" id="code6" placeholder="Enter Subject Code 6" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject6 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode7">
                                                <Form.Control type="text" id="code7" placeholder="Enter Subject Code 7" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject7 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode8">
                                                <Form.Control type="text" id="code8" placeholder="Enter Subject Code 8" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject8 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode9">
                                                <Form.Control type="text" id="code9" placeholder="Enter Subject Code 9" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject9 : e.target.value}))}}/>
                                            </Form.Group>
                                            <Form.Group className="mt-2" controlId="formscode10">
                                                <Form.Control type="text" id="code10" placeholder="Enter Subject Code 10" onChange={e => {setSubject(meowstate => ({ ...meowstate, subject10 : e.target.value}))}}/>
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
    )
}

export default Online_enrollment
