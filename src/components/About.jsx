import React, { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const [counters, setCounters] = useState({
    students: 0,
    trades: 0,
    placements: 0,
    instructors: 0
  })

  const stats = [
    { id: 'students', label: 'Students Trained', value: 2850, icon: 'fas fa-users', color: '#ff6b6b' },
    { id: 'trades', label: 'Professional Trades', value: 12, icon: 'fas fa-tools', color: '#4ecdc4' },
    { id: 'placements', label: 'Placements', value: 2150, icon: 'fas fa-briefcase', color: '#ff9f43' },
    { id: 'instructors', label: 'Expert Faculty', value: 15, icon: 'fas fa-chalkboard-teacher', color: '#a29bfe' }
  ]

  useEffect(() => {
    const duration = 2000
    const stepTime = 20
    const targetValues = {
      students: 482,
      trades: 12,
      placements: 47,
      instructors: 23
    }

    const intervals = {}
    Object.keys(targetValues).forEach(key => {
      let current = 0
      const increment = targetValues[key] / (duration / stepTime)
      intervals[key] = setInterval(() => {
        current += increment
        if (current >= targetValues[key]) {
          current = targetValues[key]
          clearInterval(intervals[key])
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
    })

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [])

  const missionPoints = [
    "To provide quality technical education to rural youth",
    "To create skilled workforce for industry requirements",
    "To promote entrepreneurship and self-employment",
    "To bridge the gap between industry and academia"
  ]

  const visionPoints = [
    "Become a center of excellence in vocational training",
    "Achieve 100% placement for all trained students",
    "Develop industry-ready professionals",
    "Contribute to 'Make in India' and 'Skill India' initiatives"
  ]

  const facilities = [
    { icon: "🏭", name: "Modern Workshops", desc: "State-of-the-art equipment" },
    { icon: "💻", name: "Computer Labs", desc: "Latest software & hardware" },
    { icon: "📚", name: "Digital Library", desc: "E-books & resources" },
    { icon: "🚌", name: "Transportation", desc: "Bus facility available" },
    { icon: "🏥", name: "Medical Support", desc: "24/7 health center" }
  ]

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              <i className="fas fa-landmark"></i> राजकीय आईटीआई जंगल कोड़िया

            </h1>
            <p className="about-hero-subtitle">
              CSC SPV द्वारा PPP Mode में संचालित यह संस्थान युवाओं को गुणवत्तापूर्ण तकनीकी शिक्षा एवं कौशल प्रशिक्षण प्रदान करता है। </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="about-intro">
          <div className="intro-card">
            <div className="intro-text">
              <h2>Welcome to Our Institute</h2>
              <p>
                Government ITI Jungle Koida, established in 2025, is a premier technical training institute 
                located in the scenic region of Sundargarh, Odisha. Operating under the Public-Private Partnership 
                (PPP) mode with CSCSPV, we are committed to providing world-class vocational training to students 
                from rural and semi-urban areas.
              </p>
              <p>
                Our institute is recognized by NCVT (National Council for Vocational Training) and offers 
                industry-relevant trades with modern infrastructure. We focus on holistic development and 
                practical skills that make our students job-ready from day one.
              </p>
              <div className="recognition-badges">
                <span><i className="fas fa-check-circle"></i> NCVT Affiliated</span>
                <span><i className="fas fa-check-circle"></i> ISO 9001:2015 Certified</span>
                <span><i className="fas fa-check-circle"></i> DGT Approved</span>
              </div>
            </div>
            <div className="intro-image">
              <div className='institute-image'>
                <img src='/images/iti.png'/>
            </div>
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map(stat => (
              <div key={stat.id} className="stat-card-a" style={{ borderBottomColor: stat.color }}>
                <div className="stat-icon" style={{ background: stat.color }}>
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number-a">{counters[stat.id]}+</div>
                <div className="stat-label-a">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <ul>
              {missionPoints.map((point, index) => (
                <li key={index}>
                  <i className="fas fa-arrow-right"></i> {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon">👁️</div>
            <h3>Our Vision</h3>
            <ul>
              {visionPoints.map((point, index) => (
                <li key={index}>
                  <i className="fas fa-eye"></i> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facilities */}
        <div className="facilities-section">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">World-class infrastructure for holistic learning</p>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h4>{facility.name}</h4>
                <p>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-handshake"></i>
              <h4>Industry Partnerships</h4>
              <p>Tie-ups with leading companies for training & placement</p>
            </div>
            <div className="feature">
              <i className="fas fa-chalkboard"></i>
              <h4>Modern Teaching Methods</h4>
              <p>Smart classrooms and digital learning resources</p>
            </div>
            <div className="feature">
              <i className="fas fa-certificate"></i>
              <h4>Government Recognized</h4>
              <p>NCVT certificates valid across India & abroad</p>
            </div>
            <div className="feature">
              <i className="fas fa-rupee-sign"></i>
              <h4>Scholarship Support</h4>
              <p>Financial assistance for deserving students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About