import React from 'react'
import { Container, Nav, Navbar ,Button} from 'react-bootstrap'
import "./Header.css"
import logo from "../../../images/logo.png"
import { Link } from "react-router-dom"
import useAuth from '../../../hooks/useAuth'


const Header = () => {
    const { user,logOut } = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allprodect">Explore</Nav.Link>
                            {
                                user.email ? <div className="d-flex "><Nav.Link  as={Link} to="/deshbord">Deshbord</Nav.Link> <Button className="bg-dark" onClick={logOut}>Logout</Button> </div>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
