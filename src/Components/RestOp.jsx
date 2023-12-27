import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function RestOp({op}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(op);
  return (
    <div> <Button variant="primary" onClick={handleShow}>
    Operation Hours
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Operation Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup>
      <ListGroup.Item> Monday : {op?.Monday}</ListGroup.Item>
      <ListGroup.Item> Tuesday :{op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item> Wednesday: {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item> Thursday: {op?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {op?.Friday}</ListGroup.Item>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default RestOp