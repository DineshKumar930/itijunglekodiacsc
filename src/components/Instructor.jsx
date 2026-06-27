import React, { useState, useEffect } from 'react'
import './Instructor.css'

const Instructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null)
  const [filter, setFilter] = useState('all')

  const instructors = [
  {
    id: 1,
    name: "Mr. Vinay Kumar Singh",
    designation: "Principal",
    department: "Administration",
    qualification: "Diploma in Mechanical Engineering",
    experience: "30+ Years",
    expertise: "Manufacturing, CAD/CAM, CNC, Production & Maintenance",
    achievements: "NCC 'C' Certificate Holder",
    students: 1230,
    rating: 5.0,
    url: "/images/principal.jpg"
  },
  {
    id: 2,
    name: "Mr. Vishal Kashyap",
    designation: "Instructor - CHNM",
    department: "CHNM",
    qualification: "Diploma in Computer Science Engineering, CITS in CHNM",
    experience: "4.3+ Years",
    expertise: "Computer Hardware, Networking, Server Administration & Troubleshooting",
    achievements: "All India CITS First Rank, All India 3rd Rank in Debate and G20 Quiz Competition, IBM Certified Professional",
    students: 400,
    rating: 4.8,
    url: "/images/vishal.jpg"
  },
  {
    id: 3,
    name: "Mr. Puneet Nayak",
    designation: "Instructor - COPA",
    department: "COPA",
    qualification: "MBA, BCA, CITS (CSA), ToT in Employability Skills",
    experience: "7+ Years",
    expertise: "Computer Applications, Office Automation & Employability Skills",
    achievements: "All India CITS Second Rank, CCC Certified",
    students: 600,
    rating: 4.9,
    url: "/images/puneet.jpg"
  },
  {
    id: 4,
    name: "Mr. Suraj Singh",
    designation: "Instructor - RAC",
    department: "RAC",
    qualification: "M.Tech in Mechanical Engineering",
    experience: "1.9+ Years",
    expertise: "Thermal Engineering, Refrigeration, Air Conditioning & Renewable Energy",
    achievements: "Faculty Development Programme Participant at NIT Patna",
    students: 200,
    rating: 4.7,
    url: "/images/suraj.jpg"
  },
  {
    id: 5,
    name: "Mr. Dhananjay Kumar Shrivastav",
    designation: "Accountant",
    department: "Office",
    qualification: "MBA, B.Com",
    experience: "14+ Years",
    expertise: "Account and Purchase ",
    achievements: "School Topper in Economics Theory",
   rating: 4.9,
    url: "/images/acc.jpg"
  },
  {
    id: 6,
    name: "Mr. Anit Kumar",
    designation: "Finance Executive",
    department: "Finance Executive",
    qualification: "ITI Electrician, CITS Electrician, BBA, MBA",
    experience: "14+ Years",
    expertise: "Accounting, Financial Management, Administration & Employability Skills",
    achievements: "14+ Years of Academic and Administrative Experience",
    students: 1100,
    rating: 4.9,
    url: "/images/anitkumar.jpg"
  },
  {
    id: 7,
    name: "Dr. Utkarsh Tiwari",
    designation: "Physiotherapy Expert",
    department: "Physiotherapy",
    qualification: "Bachelor of Physiotherapy (BPT)",
    experience: "14+ Years",
    expertise: "Exercise Therapy, Rehabilitation, Manual Therapy & Sports Injury Management",
    achievements: "Professional Experience at Leprosy Mission Hospital, Naini, Prayagraj",
    students: 1300,
    rating: 4.8,
    url: "/images/utkarsh.jpg"
  },
  {
    id: 8,
    name: "Mr. Om Mani",
    designation: "Electronics Mechanic Expert",
    department: "Electronics Mechanic",
    qualification: "M.Tech in Digital Systems",
    experience: "3.9+ Years",
    expertise: "Embedded Systems, IoT, PCB Design, Microcontrollers & Industrial Electronics",
    achievements: "Robotics Coordinator, LMRC & RDSO Signaling Training, BSNL Training, IETE Presentations on Robotics and 4G Networking",
    students: 890,
    rating: 4.9,
    url: "/images/ommani.jpg"
  },
  {
    id: 9,
    name: "Ms. Pooja Sharma",
    designation: "Fitter Expert",
    department: "Fitter",
    qualification: "B.Tech in Mechanical Engineering",
    experience: "2.5+ Years",
    expertise: "Mechanical Assembly, Maintenance & Precision Fitting",
    achievements: "Experienced in Industrial Training and Workshop Practices",
    students: 300,
    rating: 4.7,
    url: "/images/pooja sharma.jpg"
  },
  {
    id: 10,
    name: "Mr. Janmejay Yadav",
    designation: "Instructor - MMV",
    department: "MMV",
    qualification: "B.Tech in Mechanical Engineering",
    experience: "4.5+ Years",
    expertise: "Automobile Systems, Vehicle Maintenance & Workshop Technology",
    achievements: "Specialized in Automobile Maintenance and Diagnostics",
    students: 950,
    rating: 4.9,
    url: "/images/jenmejay.jpg"
  },
  {
    id: 11,
    name: "Mr. Abhishek Kumar",
    designation: "Turner Expert",
    department: "Turner",
    qualification: "ITI in Turner, Diploma in Mechanical Engineering, CITS in Turner",
    experience: "9+ Years",
    expertise: "Lathe Machine Operations, Precision Machining & Metal Cutting",
    achievements: "9+ Years of Industrial and Training Experience",
    students: 1100,
    rating: 4.8,
    url: "/images/abhi.jpg"
  },
  {
    id: 12,
    name: "Mr. Sandeep Singh",
    designation: "Instructor - Welder",
    department: "Welder",
    qualification: "B.Tech in Mechanical Engineering",
    experience: "3.4+ Years",
    expertise: "Welding Technology, Fabrication & Workshop Practices",
    achievements: "Experienced in Welding Training and Fabrication Projects",
    students: 350,
    rating: 4.9,
    url: "/images/sandeep.jpg"
  },
  {
    id: 13,
    name: "Mr. Anil Kumar Yadav",
    designation: "Electrician Expert",
    department: "Electrician",
    qualification: "Diploma in Electrical Engineering",
    experience: "9.6+ Years",
    expertise: "Electrical Machines, Power Systems & Industrial Wiring",
    achievements: "Experienced in Electrical Maintenance and Training",
    students: 890,
    rating: 4.8,
    url: "/images/anil.jpg"
  },
  {
    id: 14,
    name: "Mr. Shailendra Kumar Rao",
    designation: "Employability Skills Trainer",
    department: "Employability Skills",
    qualification: "MBA in Marketing and Finance",
    experience: "18+ Years",
    expertise: "Communication Skills, Marketing, Entrepreneurship & Career Development",
    achievements: "18+ Years of Experience in Training and Career Development",
    students: 1200,
    rating: 4.9,
    url: "/images/shaile.jpg"
  },
  {
    id: 15,
    name: "Mr. Mukesh Prajapati",
    designation: "Engineering Drawing Expert",
    department: "Engineering Drawing",
    qualification: "Diploma in Mechanical Engineering (Production), CITS Fitter",
    experience: "5+ Years",
    expertise: "Engineering Drawing, CAD Drafting & Technical Sketching",
    achievements: "All India CITS Topper and Diploma College Topper",
    students: 450,
    rating: 4.8,
    url: "/images/mukesh.jpg"
  },
  {
    id: 16,
    name: "Mr. Ashok Kumar Arya",
    designation: "WCS Expert",
    department: "WCS",
    qualification: "Diploma in Mechanical Engineering (Power Plant), CITS Fitter",
    experience: "8+ Years",
    expertise: "Workshop Calculation, Engineering Science & Manufacturing Processes",
    achievements: "Certified in CAD, CAM and CNC Technologies",
    students: 2000,
    rating: 4.9,
    url: "/images/ashok.jpeg"
  },
  {
    id: 17,
    name: "Mr. Rudra Sarraf",
    designation: "CHNM Expert",
    department: "CHNM",
    qualification: "ITI in ICTSM, CITS in CHNM",
    experience: "3.5+ Years",
    expertise: "Computer Hardware Maintenance, Networking & Troubleshooting",
    achievements: "Recipient of Industrial Painter Award",
    students: 720,
    rating: 4.7,
    url: "/images/rudra.jpg"
  },
  {
    id: 18,
    name: "Mrs. Pooja Kushwaha",
    designation: "Cosmetology Instructor",
    department: "Cosmetology",
    qualification: "ITI in Cosmetology, CITS in Cosmetology",
    experience: "3.5+ Years",
    expertise: "Dress Making, Embroidery, Mehndi Art & Beauty Care",
    achievements: "All India CITS Second Rank, CCC Certified",
    students: 430,
    rating: 4.8,
    url: "/images/pooja.jpg"
  },
  {
    id: 19,
    name: "Mr. Ravi Kumar Verma",
    designation: "Finance Executive Expert",
    department: "Finance Executive",
    qualification: "M.Com in Marketing and Finance, O Level Certification",
    experience: "7+ Years",
    expertise: "Accounting, GST, Tally ERP, Banking Operations & Financial Reporting",
    achievements: "Banking Certification Holder",
    students: 980,
    rating: 4.8,
    url: "/images/ravikumar.jpg"
  },
  {
    id: 20,
    name: "Mr. Rama Kant Shukla",
    designation: "Instructor - Fitter",
    department: "Fitter",
    qualification: "ITI in Fitter, CITS Fitter",
    experience: "7+ Years",
    expertise: "Workshop Calculation, Engineering Science & Trade Practical",
    achievements: "Academic Excellence Award Recipient",
    students: 700,
    rating: 4.9,
    url: "/images/ramakant.jpg"
  },
  {
    id: 21,
    name: "Mr. Aditya Kumar",
    designation: "MMV Expert",
    department: "MMV",
    qualification: "Diploma in Mechanical Engineering, CITS in MMV",
    experience: "2+ Years",
    expertise: "Automobile Engineering, Vehicle Maintenance & Engine Systems",
    achievements: "Specialized in Automobile Technology and Diagnostics",
    students: 580,
    rating: 4.7,
    url: "/images/aditya.jpg"
  },
  {
    id: 22,
    name: "Mr. Adesh Kumar Yadav",
    designation: "Turner Instructor",
    department: "Turner",
    qualification: "Diploma in Mechanical Engineering, ITI in Turner, CITS in Turner, ADCA, CCC",
    experience: "3+ Years",
    expertise: "Lathe Machine Operations, Precision Machining & Measuring Instruments",
    achievements: "NIESBUD Certified, DGT Certified, Topper in Sanskrit Gyan Competition",
    students: 600,
    rating: 4.9,
    url: "/images/adesh.jpg"
  },
  {
    id: 23,
    name: "Mr. Sunil Kumar",
    designation: "Welder Instructor",
    department: "Welder",
    qualification: "ITI Welder, CITS Welder, Apprentice Welder, BA",
    experience: "3+ Years",
    expertise: "Welding Technology, Fabrication, Hatha Yoga & Meditation",
    achievements: "Missile Project Participant and Swachh Bharat Mission District Level Rank 3 Holder",
    students: 400,
    rating: 4.9,
    url: "/images/sunil.jpg"
  },
   {
    id: 24,
    name: "Mrs. Devyanki Kumari",
    designation: "Instructor - Cosmetology",
    department: "Cosmetology",
    qualification: "ITI in Cosmetology, CITS in Cosmetology",
    experience: "5+ Years",
    expertise: "Beauty Therapy, Hair Styling, Skin Care & Makeup Techniques",
    achievements: "Topper in ITI and CITS (Rank 2)",
    students: 750,
    rating: 4.8,
    url: "/images/devyanki.jpg"
  },
];


  const departments = ['all', ...new Set(instructors.map(inst => inst.department))]

  const filteredInstructors = filter === 'all' 
    ? instructors 
    : instructors.filter(inst => inst.department === filter)

  const openModal = (instructor) => {
    setSelectedInstructor(instructor)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedInstructor(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section className="faculty-section">
      <div className="faculty-container">
        {/* Header */}
        <div className="faculty-header">
          <h2>Our Expert Faculty</h2>
          <p>Learn from industry professionals with years of experience</p>
        </div>

        
        {/* Filter */}
        <div className="faculty-filter">
          <button 
            className={`filter-chip ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {departments.filter(d => d !== 'all').map((dept, idx) => (
            <button 
              key={idx}
              className={`filter-chip ${filter === dept ? 'active' : ''}`}
              onClick={() => setFilter(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="faculty-grid">
          {filteredInstructors.map((faculty, idx) => (
            <div 
              key={faculty.id} 
              className="faculty-card"
              onClick={() => openModal(faculty)}
            >
              <div className="faculty-image">
                <img 
                  src={faculty.url} 
                  alt={faculty.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300?text=Faculty'
                  }}
                />
                <span className="faculty-rating">{faculty.rating} ★</span>
              </div>
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p>{faculty.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Modal */}
        {selectedInstructor && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-layout">
                <div className="modal-left">
                  <div className="modal-image-wrapper">
                    <img 
                      src={selectedInstructor.url} 
                      alt={selectedInstructor.name}
                      className="modal-profile-img"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x400?text=Faculty'
                      }}
                    />
                  </div>
                  <div className="modal-rating-box">
                    <div className="rating-big">
                      <span className="rating-star">★</span>
                      <span className="rating-value">{selectedInstructor.rating}</span>
                      <span className="rating-outof">/5</span>
                    </div>
                    <p>Instructor Rating</p>
                  </div>
                </div>
                
                <div className="modal-right">
                  <h2 className="modal-title">{selectedInstructor.name}</h2>
                  <p className="modal-designation-text">{selectedInstructor.designation}</p>
                  <span className="modal-department">{selectedInstructor.department}</span>
                  
                  <div className="modal-details-grid">
                    <div className="detail-item">
                      <div className="detail-icon">🎓</div>
                      <div className="detail-content">
                        <strong>Qualification</strong>
                        <p>{selectedInstructor.qualification}</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon">⏰</div>
                      <div className="detail-content">
                        <strong>Experience</strong>
                        <p>{selectedInstructor.experience}</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon">⚡</div>
                      <div className="detail-content">
                        <strong>Expertise</strong>
                        <p>{selectedInstructor.expertise}</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon">🏆</div>
                      <div className="detail-content">
                        <strong>Achievements</strong>
                        <p>{selectedInstructor.achievements}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-stats">
                    <div className="modal-stat-item">
                      <span className="stat-icon">👨‍🎓</span>
                      <div>
                        <span className="stat-number-large">{selectedInstructor.students}+</span>
                        <span className="stat-label-small">Students Trained</span>
                      </div>
                    </div>
                    <div className="modal-stat-item">
                      <span className="stat-icon">📚</span>
                      <div>
                        <span className="stat-number-large">{selectedInstructor.experience}</span>
                        <span className="stat-label-small">Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Instructor