
import React, { useEffect, useState } from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap';
import { useParams } from 'react-router'
import useAuth from '../../../hooks/useAuth';

const Detalse = () => {
    const [detalse,setDatalse] =useState({});
    const {id} = useParams();
    const { user} =useAuth();

    useEffect(()=>{
        const url = `https://vast-meadow-72219.herokuapp.com/prodect/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setDatalse(data))
    },[])

    const addData = (id)=>{
        const name = detalse.name;
        const price = detalse.price;
        const dec = detalse.dec;
        const img = detalse.img;
        const email = user.email;
        const userName = user.name;

        const newUser = {
            name:name,
            price:price,
            dec:dec,
            img:img,
            email:email,
            userName:userName
        }

            fetch("https://vast-meadow-72219.herokuapp.com/users",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(newUser)
            })
            .then(res =>res.json())
            .then(data =>{
               if(data.insertedId){
                   alert("Prodect Added seccess full")
               }
            })
      
        
    }
    return (
        <div>
            <Container>
              <Row className="mt-5">
                  <Col md={6}>
                    <img src={detalse.img} alt="" />
                  </Col>
                  <Col md={6}>
                      <h1 className="text-white">Name : {detalse.name}</h1>
                      <h2 className="text-white">Price : {detalse.price}$</h2>
                      <p className="text-white">{detalse.dec}</p>
                      <Button className="w-100" style={{background:"#a8741a",border:"none"}} onClick={()=>addData(detalse._id)}>Bay Now !</Button>
                  </Col>
              </Row>
            </Container>
        </div>
    )
}

export default Detalse
