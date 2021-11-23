import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./Reveus.css"

const Riveus = () => {
    const [revious, setRevious] = useState([]);

    useEffect(() => {
        fetch("https://vast-meadow-72219.herokuapp.com/revious")
            .then(res => res.json())
            .then(data => setRevious(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 style={{ color: 'white',textTransform:"uppercase" ,textAlign:"center",marginTop:"150px",marginBottom:"30px"}}>Clind Reveus</h1>
                <Row>
                    {
                        revious.map(item => (
                            <Col md={4} >
                                <Card className="p-3 bg-dark text-white text-center mb-5">
                                    <div className="text-center">
                                    <div className="pic ">
                                        {item.name.slice(0,2)}
                                    </div>
                                    </div>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Title>{item.email}</Card.Title>
                                    <Card.Text>{item.revious}</Card.Text>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Riveus
