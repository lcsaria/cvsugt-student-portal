import React from 'react'
import { Modal } from 'react-bootstrap';
import Grades from '../../grades/table/MyGrades';

function GradeModal({show, close}) {
    return (
        <div>
            <Modal 
              show={show} 
              onHide={close}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
            <Modal.Header closeButton>
              <Modal.Title>
                My Grades
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Grades/>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default GradeModal