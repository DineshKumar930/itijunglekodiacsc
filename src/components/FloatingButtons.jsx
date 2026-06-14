// components/FloatingButtons.jsx
import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(true);
  let lastScrollY = 0;

  // Hide buttons when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowButtons(false);
      } else {
        setShowButtons(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp number and message
  const whatsappNumber = "919876543210"; // Format: countrycode + number (no '+' or spaces)
  const whatsappMessage = "Hello, I want to know more about Government ITI Jungle Kodia, Gorakhpur courses and admission.";
  
  // Phone number for calling
  const phoneNumber = "+9161132939";
  
  // Brochure PDF URL (replace with your actual PDF file path)
  const brochureUrl = "/brochure/government-iti-brochure.pdf";
  
  // Alternative: Google Drive link
  // const brochureUrl = "https://drive.google.com/file/d/YOUR_FILE_ID/view";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${9161132939}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${9161132939}`;
  };

  const handleBrochure = () => {
    // Open PDF in new tab
    window.open(brochureUrl, '_blank');
    
    // Alternative: Download PDF directly
    // const link = document.createElement('a');
    // link.href = brochureUrl;
    // link.download = 'ITI_Jungle_Kodia_Brochure.pdf';
    // link.click();
  };

  return (
    <div className={`floating-buttons ${!showButtons ? 'hidden' : ''}`}>
      {/* Left Side - Brochure Button */}
      <div className="floating-btn-left brochure-btn" onClick={handleBrochure}>
        <div className="btn-content">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v16H4zM4 8h16M8 4v16M12 8v12M16 4v16" strokeLinecap="round"/>
            <path d="M12 12h4M12 16h4" strokeLinecap="round"/>
          </svg>
          <span className="btn-text">Download Brochure</span>
        </div>
      </div>

      {/* Right Side - WhatsApp & Call Buttons */}
      <div className="floating-buttons-right">
        <div className="floating-btn call-btn" onClick={handleCall}>
          <div className="btn-content">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="btn-text">Call Now</span>
          </div>
        </div>

        <div className="floating-btn whatsapp-btn" onClick={handleWhatsApp}>
          <div className="btn-content">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="btn-text">WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;