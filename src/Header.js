import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header className="AppHeader top full">
            <div className="Banner">
                <div className="BannerImg">
                    <img 
                        alt="Michael Conairis's Website." 
                        src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                    </img>
                </div>
                
                <div className="SiteTitleText">Michael Coniaris</div>
            </div>   
            <div className="SiteLinkContainer full row-two">
                <div className="site-link"><a href="https://github.com/mconiaris">GitHub Profile</a></div>
                <div className="site-link-divider"> | </div>
                <div className="site-link"><a href="https://www.linkedin.com/in/michaelconiaris/">LinkedIn Profile</a></div>
            </div>
        </header>
    )
}