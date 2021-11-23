
import React, { useState } from 'react'
import { Container, Form ,Button, Card} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'

const ReviousUser = () => {
    const [revius,setRevious] =useState("");
    console.log(revius)


    const {user} = useAuth();
 

    const handleRevious = (e)=>{
        e.preventDefault();
        const newRevious = {
            name:user.displayName,
            email:user.email,
            revious:revius
        }

        fetch("https://vast-meadow-72219.herokuapp.com/revious",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newRevious)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("successfully added reivous")
            }
        })
       

    }
    return (
        <div>
            <h1 style={{color:"white"}}>User Revious{user.name}</h1>
            <Container>
                <Card className="p-5 bg-dark">
                    <form onSubmit={handleRevious}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name :</Form.Label>
                            <Form.Control value={user.displayName} type="text" placeholder={user.name}  />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Email :</Form.Label>
                            <Form.Control value={user.email} type="email" placeholder="email"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Comment</Form.Label>
                        <Form.Control onChange={(e)=>setRevious(e.target.value)} placeholder="Revious" as="textarea" rows={3} />
                    </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" style={{background:"#a8741a",border:"none"}}>Submit</Button>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                        
                        </div>
                    </form>
                    <h1 style={{color:"white"}}>{user.name}</h1>

                </Card>
            </Container>
        </div>
    )
}

export default ReviousUser
