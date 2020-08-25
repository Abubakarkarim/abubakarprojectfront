import React,{useState} from "react";
import {
  Button,
  Form,
  NavDropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import LoginForm from  "./LoginForm";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Nav d=flex">
      <LoginForm show={show} handleClose={handleClose} />
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">FAST DESIRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/" style={{color:"white"}} >HOME PAGE</Link>
            </Nav.Link>
            

            <Nav.Link href="#link">
              <Link to="/bucket">ORDER PLACED</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/everyday">Everyday Deal</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/NightDeals">Special Deals</Link>
            </Nav.Link>
            
          </Nav>

          {<Button variant="primary" style={{color: "white"}} onClick={handleShow}>Admin Login</Button>}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
