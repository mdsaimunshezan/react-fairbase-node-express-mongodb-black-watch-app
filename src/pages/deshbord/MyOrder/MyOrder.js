import React, { useEffect, useState } from 'react'
import { Card, Row,Col, Container,Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [order,setOrder] =useState([]);
    
    const { user} =useAuth();
    useEffect(()=>{
        const url = `https://vast-meadow-72219.herokuapp.com/users?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[order])

    const deleteData = (id)=>{
        const url = `https://vast-meadow-72219.herokuapp.com/users?email=${user.email.id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data => console.log(data))
    
    }
    return (
        <div>
         <Container>
         <h2 style={{color:"white",textAlign:"center",padding:"50px"}}>My Order</h2>
           
           {
               order.map(item=>(
                  <Row className="d-flex align-items-center gy-5">
                       <Col xs={12} md={2}>
                   <img src={item.img} alt="" style={{width:"100%",marginBottom:"10px"}}/>
               </Col>
               <Col xs={12} md={3}>
                   <h3 className="text-white">{item.name}</h3>
               </Col>
               <Col xs={12} md={2}>
                   <h4 className="text-white">{item.price}</h4>
               </Col>
               <Col xs={12} md={4}>
                   <p className="text-white">{item.dec.slice(0,150)}</p>
               </Col>
               <Col xs={12} md={1}>
                  <Button variant="danger" onClick={()=>deleteData(item._id)}>DELETE</Button>
               </Col>
              

                  </Row>
               ))
           }
         </Container>
              
            
        </div>
    )
}

export default MyOrder
