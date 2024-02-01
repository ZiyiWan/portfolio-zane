import React, { useState } from "react";
import "./header.css";
import Switch from "react-switch";

const Header = () => {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <div className="nav">
      <div className="nav__wrapper container">
        <div className="nav__logo">Zane's P</div>
        <ul className="nav__menu">
          <li className="nav__menu-items">
            <a href="#home">Home</a>
          </li>
          <li className="nav__menu-items">
            <a href="#services">Services</a>
          </li>
          <li className="nav__menu-items">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav__menu-items">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav__menu-items">
            <a href="#contact">Contact</a>
          </li>
          <li className="buttons">
            <label htmlFor="" className="switch">
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#4D4D4D"
                offColor="#ccc"
                height={24}
                width={48}
              />
            </label>
            <a href="" className="button">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
