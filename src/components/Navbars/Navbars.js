import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './Navbars.css'
const Navbars = () =>{
    return(
        <div>
<Navbar className="bg-emerald" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/" className="nav-link color-white">
      Home
      </Link>
      <Link to="/portfolio" className="nav-link">
      Portfolio
      </Link>
      <Link to="/article" className="nav-link">
      Article
      </Link>
      <Link to="/hireme" className="nav-link">
      Hire Me
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default Navbars;