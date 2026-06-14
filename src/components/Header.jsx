import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ activeTab, setActiveTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const navItems = ['Home', 'About', 'Trades', 'Admission', 'Instructor','Contact']

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  const closeMenu = () => {
    setMobileOpen(false)
  }

  const handleNavClick = (item) => {
    setActiveTab(item)
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Section */}
      <div className="top-header">
        <div className="header-row">
          <div className="logo-left">
            <img 
              src="images/kausalbalam.png" 
              alt="Government of UP Logo" 
              className="logo-img"
              loading="lazy"
            />
          </div>
          
          <div className="header-title">
            <h1 className="college-title">राजकीय औद्योगिक प्रशिक्षण संस्थान (आईटीआई) जंगल कोड़िया</h1>
            <p className="college-description">
              Operated by CSC SPV under Public-Private Partnership (PPP) Model
            </p>
          </div>
          
          <div className="logo-right">
            <img 
              src="images/cscspv.png" 
              alt="CSCSPV Logo" 
              className="logo-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-header">
        <div className="nav-container">
          <button className="mobile-toggle-btn" onClick={toggleMenu} aria-label="Menu">
            <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"}></i>
            <span className="menu-text">{mobileOpen ? 'Close' : 'CSC SPV'}</span>
          </button>
          
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className={`menu-item ${activeTab === item ? 'active' : ''}`}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full screen fixed position */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h3>Govt. ITI Jungle Kodia</h3>
          <button className="close-menu-btn" onClick={closeMenu} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`mobile-menu-item ${activeTab === item ? 'active-mobile' : ''}`}
            >
              <i className="fas fa-chevron-right"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header