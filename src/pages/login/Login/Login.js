import React, { useState } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");

    const { logInUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleLogin = (e)=>{
        e.preventDefault();
        logInUser(email,password,location,history)
    }
    return (
        <div>
            <Container>
                <Card className="p-5 bg-dark">
                    <form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" style={{background:"#a8741a",border:"none"}}>Login</Button>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                        <Link to="/reguster">
                        <Button variant="text" className="text-white">You Don't Have Account ? Creat account</Button>
                        </Link>
                        </div>
                    </form>

                </Card>
            </Container>
        </div>
    )
}

export default Login
