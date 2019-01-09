import React from 'react';
import './info.css';
import Fade from 'react-reveal/Fade';
const Info = () => {
    return (
    <div className="info">
        <div class="container main-txt">
                <div class="row the-content">
                        <div class="col">
                        <Fade left cascade>
                        <div>
                        <h1>Learn About Crypto</h1>
                        <p>Coin Mania offers a number of fun to use tools, that make it easier to learn about the futur of finance. All the tools are and will always be free.</p>
                        <button type="button" class="btn btn-primary">Learn More</button>
                        </div>
                        <div>
                        <h1>Invest in the future</h1>
                        <p>Coin Mania and the crypto world gives anybody the ability to invest in the futur, without the need of traditional centralized banks and financial institution.</p>
                        <button type="button" class="btn btn-success">Learn More</button>
                        </div>
                        </Fade>
                        </div>
                        <div class="col">
                        <Fade right>
                            <img src="img/pic3.svg" draggable="false" className="image"/>
                        </Fade>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Info;
