import React from 'react'
import { Modal } from 'react-bootstrap';
import EnrolledSubjects from '../../subjects/table/EnrolledSubjects';

function SubjectModal({show, close}) {
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
                Enrolled Subject
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EnrolledSubjects/>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default SubjectModal
