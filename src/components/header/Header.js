import React from "react";
import logo from '../../assets/logo.png';
import {NavLink} from "react-router-dom";
import "./Header.css";

function Header({pageTitle}){
    return(
        <div className="header">
            <nav>
                <ul>
                <li key="home"><NavLink to="/"><h5 className="header-nav-white capitalize">hottest post</h5></NavLink></li>
                <li key="reddit"><NavLink to="/subreddit/worldnews" exact><h5 className="header-nav-white capitalize">reddit</h5></NavLink></li>
                <li key="memes"><NavLink to="/subreddit/memes" exact><h5 className="header-nav-white capitalize">memes</h5></NavLink></li>
                </ul>
            </nav>
            {pageTitle === "Reddit" &&
                <span className="header-image"><img src={logo} alt="website-logo" /></span>
            }
            <h1 className="header-heading">{pageTitle}</h1>
        </div>
    )
};

export default Header;