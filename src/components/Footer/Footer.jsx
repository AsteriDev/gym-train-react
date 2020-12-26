import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
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
