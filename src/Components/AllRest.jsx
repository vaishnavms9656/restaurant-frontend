import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import RestCard from './RestCard'

function AllRest() {

  //API fetching
  const [AllRestData, setAllRestData] = useState([])
  //to hold array of data
  const base_url = 'https://restaurant-backend-wlca.onrender.com/restaurants'
  const fetchData = async () => {
    const result = await axios.get(base_url)
    console.log(result);
    console.log(result.data);
    setAllRestData(result.data)
  }
  console.log(AllRestData);
  useEffect(() => { fetchData() }, [])
  return (
    <div><Row>
      {AllRestData.map(item => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <RestCard restaurants={item} />
        </Col>
      ))}
    </Row></div>
  )
}

export default AllRest