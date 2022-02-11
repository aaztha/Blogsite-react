import React from "react";
import "../../src/App.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Header = (props) => {
  return (
    <header className="home-header">
      <div className="logo" onClick={() => scroll.scrollToTop()}>
        <h1>{props.text}</h1>
      </div>

       {/* using links for smooth scrolling */}
      <ul className="links">
        <li>
          <Link to="Most Popular AI Blogs" smooth={true} duration={1000}>
            RECENT UPLOADS
          </Link>
        </li>
        <li>
          <Link to="#Trending" smooth={true} duration={1000}>
            TRENDS
          </Link>
        </li>
        <li>
          <Link to="Favourite Stories" smooth={true} duration={1000}>
            FAV-STORIES
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;