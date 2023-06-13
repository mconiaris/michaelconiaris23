import React from "react";
import './Main.css';

export default function Main() {
    return (
        <div className="MainContainer">
            <div className="SamplesContainer">
                <div className="Sample">
                    <h2><a href="http://www.spwgcards.com/">spwgcards</a></h2>
                    <div className="SampleText">
                        <a href="http://www.spwgcards.com/"><img 
                            alt="SPWG Card Maker Link." 
                            src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/SPWG+Card+maker+Screen+Shot.png">
                        </img></a>
                        <p>This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards. This is sample text for spwgcards.</p>
                        
                    </div>
                </div>
                <div className="Sample">
                    <h2><a href="http://www.courtneyfollweiler.com/">Courtney Follweiler's Dance Therapy</a></h2>
                    <div className="SampleText">
                        <a href="http://www.courtneyfollweiler.com/"><img 
                            alt="Courtney Follweiler's Website." 
                            src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/Courtney-Follweiler.png">
                        </img></a>
                        <p>This is sample text for Courtney's Website.</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}