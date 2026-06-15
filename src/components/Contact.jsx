import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import './Contact.css';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Award,
  Calendar,
  Globe,
  CheckCircle,
  Navigation
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Visit Us',
      details: ['Jungle Kodia,Kazipur, Dohariya Bazar, Gorakhpur', 'Uttar Pradesh - 273015', 'India']
    },
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      details: ['+91 9161132939 (Admissions)']
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      details: ['vinay.kumarcsc@csc.gov.in']
    },
    {
      icon: <Clock size={28} />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  // Courses list for dropdown
  const courses = [
    'Select a course',
    'Electrician (2 Years)',
    'Welder (1 Year)',
    'COPA (1 Year)',
    'Mechanic Diesel (2 Years)',
    'Fitter (2 Years)',
    'Electronics Mechanic (2 Years)'
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Minimum 8th/10th pass depending on trade, age 14-40 years. No entrance exam required.'
    },
    {
      question: 'Is there hostel facility available?',
      answer: 'Yes, separate hostels for boys and girls with modern amenities and 24/7 security.'
    },
    {
      question: 'What is the placement record?',
      answer: 'We have 90% placement record with top companies like Tata, L&T, Maruti Suzuki, Infosys.'
    },
    {
      question: 'Do you provide scholarship?',
      answer: 'Yes, government scholarships available for SC/ST/OBC and economically weaker sections.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>We're here to help and answer any questions you might have</p>
            <div className="breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span className="active">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="contact-cards">
        <div className="container">
          <div className="cards-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-title">
            <h2>Send Us a Message</h2>
            <p>We'll get back to you within 24 hours</p>
          </div>
          
          <div className="form-wrapper">
            <motion.div 
              className="form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Course *</label>
                    <select 
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      {courses.map((course, idx) => (
                        <option key={idx} value={course === 'Select a course' ? '' : course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea 
                    name="message"
                    rows="5"
                    placeholder="Tell us about your query or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending <div className="spinner"></div></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="map-card">
                <h3>Find Us Here</h3>
                <div className="map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.234567890123!2d80.946166!3d26.846708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f170001%3A0xfc3d8b6c9f2d8e4!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="ITI Jungle Kodia Location"
                  ></iframe>
                </div>
                <div className="directions-btn">
                  <Navigation size={18} />
                  Get Directions
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our institute</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="faq-question">
                  <MessageCircle size={20} />
                  <h3>{faq.question}</h3>
                </div>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-wrapper">
            <motion.div 
              className="stat-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Users size={40} />
              <div className="stat-number">5000+</div>
              <div className="stat-label">Students Trained</div>
            </motion.div>
            <motion.div 
              className="stat-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Award size={40} />
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Partners</div>
            </motion.div>
            <motion.div 
              className="stat-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Calendar size={40} />
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Excellence</div>
            </motion.div>
            <motion.div 
              className="stat-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Globe size={40} />
              <div className="stat-number">100%</div>
              <div className="stat-label">Job Assistance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="social-section">
        <div className="container">
          <div className="social-content">
            <motion.div 
              className="social-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Connect With Us</h3>
              <p>Follow us on social media for updates, events, and success stories</p>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#" className="social-icon facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="social-icon twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="social-icon instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="social-icon linkedin">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;