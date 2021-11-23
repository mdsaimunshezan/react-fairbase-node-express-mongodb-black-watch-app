import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../../images/1.jpg"
import prament from "../../../images/payment.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <h3 className="footer">About Mirora</h3>
                        <h6 className="footer__dectalse">Address: 123 Main Street, Anytown, CA 12345 - USA.</h6>
                        <h6 className="footer__dectalse">Phone: (012) 800 456 789</h6>
                        <h6 className="footer__dectalse">Fax: (012) 800 456 789</h6>
                        <h6 className="footer__dectalse">Email: Contact@plazathemes.com</h6>
                    </Col>

                    <Col md={2}>
                        <h3 className="footer">Information</h3>
                        <h6 className="footer__dectalse">About Us</h6>
                        <h6 className="footer__dectalse">Privacy Policy</h6>
                        <h6 className="footer__dectalse">Terms & Conditions</h6>
                        <h6 className="footer__dectalse">Gift Certificates</h6>
                    </Col>

                    <Col md={2}>
                        <h3 className="footer">Extras</h3>
                        <h6 className="footer__dectalse">Gift Certificates</h6>
                        <h6 className="footer__dectalse">Affiliate</h6>
                        <h6 className="footer__dectalse">Specials</h6>
                        <h6 className="footer__dectalse">My Account</h6>
                    </Col>

                    <Col md={4}>
                        <h3 className="footer">Custom Products</h3>
                        <Row className="gy-3">
                            <Col md={4}>
                                <img src={img1} alt="" className="img-fluid mt-3"  style={{width:"70px"}} />

                            </Col>
                            <Col md={8}>
                                <h3 className="footer-item">Acer Aspire E 15</h3>
                                <div className="footer__price d-flex justify-content-between">
                                    <h4 className="footer__current-price">$550.00 </h4>
                                    <h4 className="footer__current-price"> <del>$700.00</del> </h4>

                                </div>
                            </Col>

                            <Col md={4}>
                                <img src={img1} alt="" className="img-fluid" style={{width:"70px"}} />

                            </Col>
                            <Col md={8}>
                                <h3 className="footer-item">Acer Aspire E 15</h3>
                                <div className="footer__price  d-flex justify-content-between">
                                    <h4 className="footer__current-price">$550.00 </h4>
                                    <h4 className="footer__current-price"> <del>$700.00</del> </h4>

                                </div>
                            </Col>

                        </Row>
                    </Col>

                </Row>
                <hr style={{border:"1px solid white"}}/>
                <div className="writer">Copyright © 2021 sun .All Right Reserved.</div>
                <div className="prement">
                    <img src={prament} alt=""/>
                </div>
            </Container>
        </div>
    )
}

export default Footer
