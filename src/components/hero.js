import React, { Component } from 'react';
import './hero.css';
import Tilt from 'react-tilt';

class Hero extends Component {
    render() {
        return (
            <div className="hero-section">
                <div class="header__bg"></div>
                <Tilt className="Tilt" options={{reverse: true,max: 20}} >
                    <img src="img/hero.svg" draggable="false"/>
                </Tilt>
            </div>
        );
    }
}

export default Hero;
