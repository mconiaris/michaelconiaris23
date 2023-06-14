import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header>
            <h1>Michael Coniaris | Web Developer</h1>
            <div className="HeaderImg">
                <img 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg" 
                    alt="An image of Michael Coniaris spelled out in binary."
                />
                <p>Testing background images.</p>
            </div>
        </header>
    )
}