import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ShowProdect from '../ShowProdect/ShowProdect';

const Prodect = () => {
    const [prodect,setProdect] =useState([]);

    useEffect(()=>{
        fetch("https://vast-meadow-72219.herokuapp.com/prodect")
        .then(res => res.json())
        .then(data => setProdect(data))
       
    },[])
    return (
        <div>
            <Container>
            <h1 style={{color:"white",textAlign:"center",marginTop:"150px",marginBottom:"50px",textTransform:"uppercase"}}>Our Prodect </h1>
           <Row className="gy-5">
           {
                prodect.slice(0,6).map(item => <ShowProdect key={item._id} item={item}/>)
            }
           </Row>

            </Container>
            

        </div>
    )
}

export default Prodect
