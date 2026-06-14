import React, { useState } from 'react'
import './Admission.css'

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trade: '',
    qualification: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const trades = [
    "Electrician (2 years)",
    "Fitter (2 years)",
    "Welder (1 year)",
    "COPA (1 year)",
    "Mechanic Diesel (2 years)",
    "Computer Hardware & Networking (1 year)"
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      trade: '',
      qualification: '',
      message: ''
    })
  }

  const admissionSteps = [
    { step: 1, title: "Fill Application", desc: "Submit online application form", icon: "📝" },
    { step: 2, title: "Document Verification", desc: "Submit required documents", icon: "📄" },
    { step: 3, title: "Entrance Test", desc: "Merit-based selection", icon: "✍️" },
    { step: 4, title: "Fee Payment", desc: "Complete admission process", icon: "💰" }
  ]

  const eligibility = [
    { trade: "Electrician", eligibility: "10th Pass with Science & Maths", duration: "2 Years", fees: "₹8,000/year" },
    { trade: "Fitter", eligibility: "10th Pass with Science & Maths", duration: "2 Years", fees: "₹8,000/year" },
    { trade: "Welder", eligibility: "8th Pass", duration: "1 Year", fees: "₹6,000/year" },
    { trade: "COPA", eligibility: "10th Pass", duration: "1 Year", fees: "₹7,000/year" },
    { trade: "Mechanic Diesel", eligibility: "10th Pass", duration: "2 Years", fees: "₹9,000/year" },
    { trade: "Computer Hardware", eligibility: "10th Pass", duration: "1 Year", fees: "₹7,500/year" }
  ]

  const documents = [
    "10th Marksheet & Certificate",
    "Caste Certificate (if applicable)",
    "Residence Proof",
    "Passport size photographs (4 copies)",
    "Aadhar Card copy"
  ]

  return (
    <section className="admission-section">
      <div className="admission-container">
        {/* Hero Banner */}
        <div className="admission-hero">
          <h1 className="admission-hero-title">
            <i className="fas fa-graduation-cap"></i> Admission 2024-25
          </h1>
          <p className="admission-hero-subtitle">
            Apply now for skill development courses and build your career
          </p>
          <div className="admission-badge">
            <i className="fas fa-calendar-alt"></i> Last Date: 31st July 2024
          </div>
        </div>

        {/* Admission Steps */}
        <div className="admission-steps">
          <h2 className="section-title">Admission Process</h2>
          <div className="steps-container">
            {admissionSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Table */}
        <div className="eligibility-section">
          <h2 className="section-title">Eligibility & Fee Structure</h2>
          <div className="table-container">
            <table className="eligibility-table">
              <thead>
                <tr>
                  <th>Trade</th>
                  <th>Eligibility</th>
                  <th>Duration</th>
                  <th>Annual Fees</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.trade}</strong></td>
                    <td>{item.eligibility}</td>
                    <td>{item.duration}</td>
                    <td className="fees">{item.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents Required */}
        <div className="documents-section">
          <h2 className="section-title">Documents Required</h2>
          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="doc-card">
                <i className="fas fa-file-alt"></i>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form & Info */}
        <div className="form-section">
          <div className="form-info">
            <h3><i className="fas fa-info-circle"></i> Important Information</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> 50% scholarship for SC/ST/OBC students</li>
              <li><i className="fas fa-check-circle"></i> Girls hostel available with security</li>
              <li><i className="fas fa-check-circle"></i> Placement assistance guaranteed</li>
              <li><i className="fas fa-check-circle"></i> Industry visits & guest lectures</li>
              <li><i className="fas fa-check-circle"></i> Tool kit provided for some trades</li>
            </ul>
            <div className="contact-info">
              <p><i className="fas fa-phone-alt"></i> Admission Helpline: +91 12345 67890</p>
              <p><i className="fas fa-envelope"></i> Email: admission@itijunglekoida.edu.in</p>
            </div>
          </div>

          <div className="application-form">
            <h3><i className="fas fa-edit"></i> Apply Online</h3>
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i> Application submitted successfully! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select name="trade" value={formData.trade} onChange={handleChange} required>
                  <option value="">Select Trade</option>
                  {trades.map((trade, index) => (
                    <option key={index} value={trade}>{trade}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select name="qualification" value={formData.qualification} onChange={handleChange} required>
                  <option value="">Highest Qualification</option>
                  <option>8th Pass</option>
                  <option>10th Pass</option>
                  <option>12th Pass</option>
                  <option>Graduate</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Additional Message (Optional)"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit Application <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission