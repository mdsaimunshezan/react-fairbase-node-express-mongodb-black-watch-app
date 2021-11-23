import React from 'react'
import { Container } from 'react-bootstrap'
import "./Subscript.css"

const Subscript = () => {
    return (
        <div>
            
           <Container>
           <div id="subcript">
            <div className="custom_container text-center text-white mt-5 suv_text">
                <h4 className="subscript__title">Join Our Newsletters Now!</h4>
                <p className="subscript__text">Typi non habent claritatem insitam est usus legentis in qui facit eorum claritatem, investigationes
                    demonstraverunt lectores legere me lius quod legunt saepius.

                </p>
                <div className="">
                    <input type="text" placeholder="Enter your Email address" className="input__subscript"/>
                    <button className="subscript__btn">Subcripe</button>
                </div>
            </div>
        </div>
           </Container>
        </div>
    )
}

export default Subscript
