import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  
                            src="images/img-6.jpg" 
                            text="Explore this amazing place"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem  
                            src="images/img-5.jpg" 
                            text="Travel through this Chain of Mountains"
                            label="Extreme"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem  
                            src="images/img-7.jpg" 
                            text="Explore this amazing place"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem  
                            src="images/img-2.jpg" 
                            text="Travel through this Chain of Mountains"
                            label="Extreme"
                            path="/services"
                        />
                        <CardItem  
                            src="images/img-3.jpg" 
                            text="Allow yourself relax on this exotic beach"
                            label="Beach"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
