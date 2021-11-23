
import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ShowProdect = ({ item }) => {
    const { name, price, dec, img,_id } = item;
    return (
        <Col xs={12} sm={6} md={4}>
            <Card className="bg-dark">

                <img src={img} alt="" />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title style={{ color: "#a8741a", fontSize: "25px", padding: "5px 0px" }}>{name}</Card.Title>
                        <Card.Title className="text-white">{price} $</Card.Title>
                    </div>
                    <Card.Text className="text-white" style={{ textAlign: "justify" }}>{dec}</Card.Text>
                    <Link to={`/detalse/${_id}`}>
                        <Button className="w-100 " style={{ background: "#a8741a", border: "none" }}>Bay Now !</Button>
                    </Link>

                </Card.Body>


            </Card>
        </Col>

    )
}

export default ShowProdect
