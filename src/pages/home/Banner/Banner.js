import React from 'react'
import banner from "../../../images/banner-2.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" className="banner__img"/>
                <div className="banner__content d-none d-md-block">
                    <small className="banner__discount">Exclusive Offer -20% Off This Week</small>
                    <h1 className="banner__title">H-Vault Classico</h1>
                    <p className="banner__dec">H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part ThatIs.</p>
                    <h6 className="banner__price">Starting At : <span className="banner__color">$1.499.00</span> </h6>
                    <button className="bannter__btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
