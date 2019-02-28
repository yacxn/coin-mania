import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero-section">
                <div className="header__bg">
                </div>
                <div className="header_content">
                    <h1>Crypto Price Index</h1>
                    <p>Top 20 Cryptocurrencies by Volume</p>
                </div>
                <img className="main-img" src="img/hero.svg" draggable="false" alt="main-img"/>
            </div>
        );
    }
}

export default Hero;
