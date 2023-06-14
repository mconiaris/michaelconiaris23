import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="Banner">
                <h1>Michael Coniaris</h1>
                <h2>Web Developer</h2>
            </div>
            <figure className="HeaderImg">
                <img 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg" 
                    alt="An image of Michael Coniaris spelled out in binary."
                />
                <figcaption>Michael Coniaris is a Web developer specializing in Ruby on Rails, React HTML, CSS and JavaScript.</figcaption>
            </figure>
            <div className="HeaderImg">
                
                <p></p>
            </div>
        </header>
    )
}