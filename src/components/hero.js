import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero-section">
                <div class="header__bg">
                </div>
                <div class="header_content">
                    <h1>Crypto Price Index</h1>
                    <p>The Best Spot To Learn About Crypto</p>
                    <button type="button" class="btn btn-lg btn-primary">Learn More</button>
                    <button type="button" class="btn btn-success">Get In</button>
                </div>
                <img class="main-img" src="img/hero.svg" draggable="false"/>
            </div>
        );
    }
}

export default Hero;
