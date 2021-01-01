import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">LOGO</div>
        <div className="footer-content">
          <a href="https://google.com">Terms & Conditions</a>
          <a href="https://google.com">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-social">
        <h2>Follow us on social media to get the latest updates</h2>
        <div className="footer-logos">
          <a href="https://facebook.com" className="logo">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="logo">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="logo">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
