import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header className="App-header">
            <div className="site-title-left">
                <img 
                    className="Header-image-left" 
                    alt="Code" 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
                <div className="site-title-text">Michael Coniaris</div>
            </div>
            <div className="site-title-right">
                <img 
                    className="Header-image-left" 
                    alt="Link to About Page." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/Cat_and_Me_Small.jpeg">
                </img>
            </div>
        </header>
    )
}