import React, { useState } from "react";
import logo from "../assets/shared/nasa-logo.svg";
import { NavLink} from "react-router-dom";

const Header = (props) => {
  const [openLinks, setOpenLinks] = useState(false); //mobile for responsive

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div >
              <a href="#main" className="skip-to-content">Skip to content</a>

      <header className="primary-header flex pa" >

        <div>
          <img src={logo} alt="Nasa Apod" className="logo"/>
          
        
        </div>

        <button
          className={`mobile-nav-toggle ${openLinks ? "close" : "open"}`}
          aria-controls="primary-navigation"
          onClick={toggleNavbar}
        >
          {/* only visible for screen readers */}
          <span aria-expanded={!openLinks} className="sr-only">
            Menu
          </span>
        </button>

        <nav className="navbar">
          <ul
            className={`primary-navigation flex ${openLinks ? "" : "hidden"}`}
          >
            <li>
              <NavLink
                to="/"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              > 
                Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              >
                {/* the aria-hidden is so that span won't be read to the screen reader */}

                <span aria-hidden="true">01</span>
                Destination</NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              > <span aria-hidden="true">02</span>
                Crew</NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              > <span aria-hidden="true">03</span>
                Technology</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      
    </div>
  );
};

export default Header;
