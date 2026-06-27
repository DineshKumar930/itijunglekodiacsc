// components/Footer.jsx - UPDATED
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>राजकीय औद्योगिक प्रशिक्षण संस्थान</h3>
            <p>Jungle Kodia, Gorakhpur<br />Empowering Youth Since 2024</p>
            <div className="contact-details">
              <p><FaMapMarkerAlt aria-hidden="true" /> <span>Kazipur, Dohariya Bazar, Gorakhpur, UP - 273015</span></p>
              <p><FaPhone aria-hidden="true" /> <span>+91-72177 56874</span></p>
              <p><FaEnvelope aria-hidden="true" /> <span>vinay.kumarcsc@csc.gov.in</span></p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
          <a href="#" onClick={() => setActiveTab('Home')}>
            Home
          </a>
        </li>

        <li>
          <a href="#" onClick={() => setActiveTab('About')}>
            About Us
          </a>
        </li>

        <li>
          <a href="#" onClick={() => setActiveTab('Trades')}>
            Courses
          </a>
        </li>

        <li>
          <a href="#" onClick={() => setActiveTab('Admission')}>
            Admission
          </a>
        </li>

        <li>
          <a href="#" onClick={() => setActiveTab('Contact')}>
            Contact
          </a>
        </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Student Corner</h4>
            <ul>
              <li><a href="#">Student Login</a></li>
              <li><a href="#">Exam Results</a></li>
              <li><a href="https://scholarship.up.gov.in/index.aspx">Scholarships</a></li>
              <li><a href="#">Placement Cell</a></li>
              <li><a href="#">Alumni Network</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/images/brochure.pdf">Download Brochure</a></li>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">Fee Structure</a></li>
              <li><a href="#">RTI</a></li>
              <li><a href="#">Tender Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://youtube.com/@governmentitijunglekodiagkp?si=izPnmVNxzpU8SzYL" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/giti_497?igsh=MTluNG95OHF3N3Yxb" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/giti_497?igsh=MTluNG95OHF3N3Yxb" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/giti_497?igsh=MTluNG95OHF3N3Yxb" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <div className="copyright">
  <p>&copy; 2026 Government ITI Jungle Kodia, Gorakhpur. All rights reserved.</p>
  <p>
    Developed & Designed by{" "}
    <a 
      href="https://dkwebsoft.netlify.app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="developer-link"
    >

      dkwebsoft
    </a>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;