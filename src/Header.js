import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header className="AppHeader">
            <div className="BannerImg double left img-left">
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
            </div>
            
            <div className="SiteTitleText middle">Michael Coniaris</div>
            <div className="SiteLinkContainer middle">
                <div className="SiteLink"><a href="https://github.com/mconiaris">GitHub Profile</a></div>
                <div className="SiteLinkDivider"> | </div>
                <div className="SiteLink"><a href="https://www.linkedin.com/in/michaelconiaris/">LinkedIn Profile</a></div>
            </div>
            <div className="BannerImg double right img-right">
                <img 
                    alt="Michael Conairis's Website." 
                    src="https://s3.us-east-2.amazonaws.com/media.michaelconiaris.com/images/code_logo.jpg">
                </img>
            </div>
        </header>
    )
}