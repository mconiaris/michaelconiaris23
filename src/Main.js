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
                        <p>Developed using Ruby on Rails (<a href="https://github.com/mconiaris/spwg_card_maker">GitHub</a>), this app creates playable cards for the <a href="https://prowrestlingsuperstar.com/">Pro Wrestling Superstar</a> game. As the user enters in moves, points and other values to create a card, the app provides detailed statistics on its strength. The site also allows users to use existing templates to create their own playable cards.</p>
                        
                    </div>
                </div>
                <div className="Sample">
                    <h2><a href="http://www.courtneyfollweiler.com/">Courtney Follweiler's Dance Therapy</a></h2>
                    <div className="SampleText">
                        <a href="http://www.courtneyfollweiler.com/"><img 
                            alt="Courtney Follweiler's Website." 
                            src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/Courtney-Follweiler.png">
                        </img></a>
                        <p>Developed using Ruby on Rails (<a href="https://github.com/mconiaris/courtney">GitHub</a>), this site serves as a marketing platform for a Dance Therapy company. The client wanted a straightforard and simple design.</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}