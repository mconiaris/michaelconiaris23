import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header className="App-header top full">
            <div className="Header-image">
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
            </div>
            <div className="site-title-text">Michael Coniaris</div>
            <div className="Header-image">
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
            </div>
            <div className="site-link-container">
                <div className="site-link"><a href="https://github.com/mconiaris">GitHub Profile</a></div>
                <div className="site-link-divider"> | </div>
                <div className="site-link"><a href="https://www.linkedin.com/in/michaelconiaris/">LinkedIn Profile</a></div>
            </div>
        </header>
    )
}