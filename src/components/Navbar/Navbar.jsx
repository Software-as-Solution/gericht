import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleOpenNavbar() {
    setToggleMenu(true);
  }
  function handleCloseNavbar() {
    setToggleMenu(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">about</a>
        </li>
        <li className="p-opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p-opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="p-opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p-opensans">
          Book Table
        </a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={handleOpenNavbar}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={handleCloseNavbar}
            />
            <ul className="navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">about</a>
              </li>
              <li className="p-opensans">
                <a href="#menu">menu</a>
              </li>
              <li className="p-opensans">
                <a href="#awards">awards</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
