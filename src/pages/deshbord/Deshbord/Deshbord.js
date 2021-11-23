import React, { useState } from 'react'
import { Container, Offcanvas, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Deshbord.css"

const Deshbord = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Row>
                <Col xs={12} md={2}>

                    <Offcanvas className="bg-dark" backdrop={false} show={show} onHide={handleClose}>
                        <Offcanvas.Body>
                            <ListGroup>
                                <Link style={{textDecoration:"none"}} to="/myorder">
                                    <ListGroup.Item className="bg-dark border border-white text-white mb-4 text-center">My Order</ListGroup.Item>
                                </Link>
                                <Link style={{textDecoration:"none"}} to="/revious">
                                    <ListGroup.Item className="bg-dark border border-white text-white mb-4 text-center">Revious</ListGroup.Item>
                                </Link>
                                <Link style={{textDecoration:"none"}} to="/prement">
                                    <ListGroup.Item className="bg-dark border border-white text-white mb-4 text-center">Prement</ListGroup.Item>
                                </Link>


                            </ListGroup>
                            
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
                <Col sx={12} md={10}>
                    <div className="deshbord">
                        <h1 className="deshbord__title">Welcome to DeshBord</h1>

                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Deshbord
