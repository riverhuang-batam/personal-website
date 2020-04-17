import React from 'react'
import {Col, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const ArticleItem = (props) => {
    const {title, image, description, id} = props.item;
    // console.log(id)

    return(
        <div>
            <Col>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Link to={`/article/${id}`}>
    <Button variant="primary" block>Go somewhere</Button>
    </Link>
  </Card.Body>
</Card>
            </Col>
        </div>
    )
}
export default ArticleItem;