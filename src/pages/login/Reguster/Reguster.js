import React, { useState } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const Reguster = () => {
    const [name,setName] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const { regustion ,loding} = useAuth();

    const handleSubmit = (e)=>{
        e.preventDefault();

       regustion(email,password,name)
    }
    
    return (
        <Container>
                <Card className="p-5 bg-dark">
                    <form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Name :</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password :</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" style={{background:"#a8741a",border:"none"}}>{loding ? "Raning Process" : "Reguster"}</Button>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                       <Link to="/login">
                       <Button variant="text" className="text-white">All Ready Have Accound ? Login Plese</Button>
                       </Link>
                        </div>
                    </form>

                </Card>
            </Container>
    )
}

export default Reguster
