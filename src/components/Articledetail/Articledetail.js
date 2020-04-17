import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import {Card, Button, Container} from 'react-bootstrap'
import axios from 'axios';
const Articledetail = () =>{
    const {id} = useParams()

    const [detail, setDetail] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3004/articles/${id}`)
        .then((res) => setDetail(res.data))
        .catch((err) => console.log(err))
    }, [])
    
    return(
        
           <Container>
            <Link to={`/article`}>
    <Button variant="primary">Back</Button>
    </Link>
            <Card >
  <Card.Img variant="top" src={detail.image} />
  <Card.Body>
    <Card.Title>{detail.title}</Card.Title>
    <Card.Text>
      {detail.description}
    </Card.Text>
    
  </Card.Body>
</Card>
</Container>
        
    )
}
export default Articledetail;