import React, { Component } from 'react';
import './hero.css';
class Hero extends Component {
    render() {
        return (
            <div className="hero-section">
                <img src="img/hero.svg" draggable="false"/>
            </div>
        );
    }
}

export default Hero;
