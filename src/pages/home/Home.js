import React, {Component} from 'react'
import {Row, Col, Jumbotron} from 'react-bootstrap'
import './Home.css'
class Home extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                    <h1>LOREM IPSUM</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
                <Jumbotron className="bg-emerald">
                    
                </Jumbotron>
                
            </div>
        )
    }
}
export default Home;