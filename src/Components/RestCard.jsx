import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
    console.log(restaurants);
    console.log(restaurants.name);
    return (
        <div>
          <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}><MDBCard className='my-5 mx-4' style={{height:'500px'}}>
        <MDBCardImage src={restaurants.photograph} position='top' alt='...' style={{height:'350px'}} />
        <MDBCardBody>
          <MDBCardTitle>{restaurants.name}</MDBCardTitle>
          <MDBCardText>
          {restaurants.address}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Link> </div>
    )
}

export default RestCard