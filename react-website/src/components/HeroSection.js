import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className="hero-container">
                <h1> ADVENTURE AWAITS </h1>
                <p>What are you wait for?</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                        GET STARTED
                    </Button>
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        WATCH TRAILER <i className="fas fa-play-circle"></i>
                    </Button>
                </div>
            </div>

        </>
    )
}

export default HeroSection;
//  {/* <img src="images/img-9.jpg" alt="Main Photo" /> */}