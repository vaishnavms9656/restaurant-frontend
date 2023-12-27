import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';
function ViewRest() {
  //use Params=Ues to get paramter from url
  // const paraId=useParams();
  // console.log(paraId.id);//object->id=3
  const [restDetails, setRestDetails] = useState({})
  const { id } = useParams()
  console.log(id);
  //Api calls to get details of particular  resturant using path paramneter
  const base_url = 'https://restaurant-backend-wlca.onrender.com/restaurants'
  const fetchData = async () => {
    //http://localhost:3000/view/1
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result);
    setRestDetails(result.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div><Row>
      <Col><img src={restDetails.photograph} alt="" style={{ width: '450px', height: '500px', margin: '40px' }} /></Col>
      <Col>
        <div className='container my-5 p-5'>
          <ListGroup>
            <h1 className='text-center'>Restaurant Name: {restDetails.name}</h1>
            <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Restaurant Address: {restDetails.address}</ListGroup.Item>
            <ListGroup.Item>Restaurant Cusine Type:{restDetails.cusine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
            <ListGroup.Item><RestReview op={restDetails.reviews}/></ListGroup.Item>
          </ListGroup>
          </div>
          </Col>
    </Row></div>
  )
}

export default ViewRest