import React from "react";
import './Main.css';

export default function Main() {
    return (
        <div className="MainContainer">
            <div className="SamplesTitle">
                <h1>Samples</h1>
            </div>
            <div className="SamplesContainer">
                <div className="Sample">
                    <div className="SampleText">
                        <h2>spwgcards.com</h2>
                        <p>This is sample text for spwgcards.</p>
                    </div>
                    <div className="SampleImage">
                        <img 
                            alt="SPWG Card Maker Link." 
                            src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/SPWG+Card+maker+Screen+Shot.png">
                        </img>
                    </div>
                </div>
                <div className="Sample">
                    <div className="SampleText">
                        <h2>Courtney Follweiler's Dance Therapy</h2>
                        <p>This is sample text for Courtney's Website. Making more text and more.</p>
                    </div>
                    <div className="SampleImage">
                        <img 
                            alt="Courtney Follweiler's Website." 
                            src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/Courtney-Follweiler.png">
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
    
}