import React, {Component} from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap";
class Portfolio extends Component{
    render(){
        return(
            <div className="text-center">
                <h1>Portfolio</h1>
                <Container>
                <Row><Col>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col></Row>
</Container>
            </div>
        )
    }
}
export default Portfolio;