// import React from 'react'
import "../components_css/Footer.scss";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer_boby">
      <div className="footer_box">
        <div className="footer_item">
          <ul>
            <p>Categories</p>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <p>Contact</p>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="United">
          <span>United States</span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
