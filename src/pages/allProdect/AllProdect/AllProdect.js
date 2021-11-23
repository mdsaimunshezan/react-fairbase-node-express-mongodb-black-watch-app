import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ShowAllProdect from '../ShowAllProdect/ShowAllProdect';

const AllProdect = () => {
    const [allProdect,setAllProdect] =useState([]);

    useEffect(()=>{
        fetch("https://vast-meadow-72219.herokuapp.com/prodect")
        .then(res =>res.json())
        .then(data =>setAllProdect(data))
    },[])
    return (
        <div>
           <Container>
           <h1 style={{color:'white',textAlign:"center",padding:"50px 0px",textTransform:'uppercase'}}>All prodect</h1>
            <Row className="gy-5">
                {
                    allProdect.map(item=> <ShowAllProdect key={item._id} item={item} />)
                }
            </Row>
           </Container>
        </div>
    )
}

export default AllProdect
