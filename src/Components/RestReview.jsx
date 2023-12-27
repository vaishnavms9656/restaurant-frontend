import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function RestReview({op}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(op);
  return (
    <div><Button variant="primary" onClick={handleShow}>
    Reviews
  </Button>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <div>
    {op?.map(item=>(
        <ListGroup>
      <ListGroup.Item><h3>Name :{item.name}</h3></ListGroup.Item>
      <ListGroup.Item> Date :{item.date}</ListGroup.Item>
      <ListGroup.Item> Rating: {item.rating}</ListGroup.Item>
      <ListGroup.Item> Comments: {item.comments}</ListGroup.Item>
    </ListGroup>
    ))}
    </div>
    </Offcanvas.Body>
  </Offcanvas></div>
  )
}

export default RestReview