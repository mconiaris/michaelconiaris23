import React from "react";
import './Main.css';

export default function Main() {
    return (
        <div className="samples-container">
            <div className="samples-title">
                <h1>Samples</h1>
            </div>
            
            <div className="sample">
                <h2>Example 1</h2>
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
                <h2>Example 2</h2>
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
            </div>
        </div>
    )
    
}