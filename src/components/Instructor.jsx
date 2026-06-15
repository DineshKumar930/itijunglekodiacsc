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
      qualification: "Ph.D. in Electrical Engineering, B.Tech",
      experience: "15+ Years",
      expertise: "Industrial Wiring, Motor Controls, PLC Programming",
      url: "/images/principal.jpg",
      department: "Electrical",
      rating: 4.9,
      students: 1250,
      achievements: "Best Teacher Award 2022, Published 5 Research Papers"
    },
    {
      id: 2,
      name: "Mr. Vishal Kashyap",
      designation: "Instructor - CHNM",
      qualification: "MCA, B.Sc. Computer Science",
      experience: "10+ Years",
      expertise: "MS Office, Tally, Programming, Database Management",
      url: "/images/vishal.jpg",
      department: "CHNM",
      rating: 4.8,
      students: 980,
      achievements: "Microsoft Certified Trainer, IBM Certified Professional"
    },
    {
      id: 3,
      name: "Mr. Puneet Pathak",
      designation: "Instructor - COPA",
      qualification: "Diploma in Mechanical Engineering, ITI Fitter",
      experience: "18+ Years",
      expertise: "Precision Fitting, Lathe Operations, Assembly Techniques",
      url: "/images/puneet.jpg",
      department: "COPA",
      rating: 4.9,
      students: 1420,
      achievements: "National Skill Award 2019, Industrial Excellence Award"
    },
    {
      id: 4,
      name: "Mr. Suraj Singh",
      designation: "Instructor - RAC",
      qualification: "Advanced Diploma in Welding Technology",
      experience: "12+ Years",
      expertise: "Arc Welding, TIG/MIG Welding, Pipe Welding",
      url: "/images/suraj.jpg",
      department: "RAC",
      rating: 4.7,
      students: 890,
      achievements: "Certified Welding Inspector, International Welding Diploma"
    },
    {
      id: 5,
      name: "Mrs. Devyanki Kumari",
      designation: "Instructor - Cosmetology ",
      qualification: "B.Tech Mechanical, Diploma in Automobile",
      experience: "8+ Years",
      expertise: "Diesel Engine Repair, Diagnostics, Maintenance",
      url: "/images/devyanki.jpg",
      department: "Cosmetology",
      rating: 4.8,
      students: 750,
      achievements: "Women in STEM Award, Best Faculty 2023"
    },
    {
      id: 6,
      name: "Mr. Anit Kumar",
      designation: "Finance Executive",
      qualification: "B.Tech CSE, CCNA Certified",
      experience: "9+ Years",
      expertise: "Hardware Networking, Troubleshooting, Server Management",
      url: "/images/anitkumar.jpg",
      department: "Finance Executive",
      rating: 4.9,
      students: 1100,
      achievements: "Cisco Certified, Red Hat Certified Engineer"
    },
    {
      id: 7,
      name: "Dr. Utkarsh Tiwari",
      designation: "Physiotherapy Expert",
      qualification: "M.Tech Electronics, B.Ed",
      experience: "7+ Years",
      expertise: "Circuit Design, PCB Assembly, Microcontrollers",
      url: "/images/utkarsh.jpg",
      department: "Physiotherapy",
      rating: 4.8,
      students: 620,
      achievements: "Young Innovator Award 2021"
    },
    {
      id: 8,
      name: "Mr. Om Mani",
      designation: "Electronics Mechanic Expert",
      qualification: "Ph.D. Renewable Energy",
      experience: "11+ Years",
      expertise: "Solar Panel Installation, Maintenance",
      url: "/images/ommani.jpg",
      department: "Electronics Mechanic",
      rating: 4.9,
      students: 890,
      achievements: "National Electronics Mechanic Award"
    },
    {
      id: 9,
      name: "Ms. Pooja Sharma",
      designation: "Fitter Expert",
      qualification: "Diploma in Mechanical",
      experience: "12+ Years",
      expertise: "CNC Programming, Machine Operation",
      url: "/images/pooja sharma.jpg",
      department: "Fitter",
      rating: 4.7,
      students: 780,
      achievements: "CNC Certified Professional"
    },
    {
      id: 10,
      name: "Mr. Janmejay Yadav",
      designation: "Instructor - MMV",
      qualification: "MCA, B.Sc Computer Science",
      experience: "8+ Years",
      expertise: "HTML, CSS, JavaScript, React",
      url: "/images/jenmejay.jpg",
      department: "MMV",
      rating: 4.9,
      students: 950,
      achievements: "Certified Web Developer"
    },
    {
      id: 11,
      name: "Mr. Abhishek Kumar",
      designation: "Turner Expert",
      qualification: "ITI Plumbing, Diploma",
      experience: "15+ Years",
      expertise: "Pipe Fitting, Sanitary Installation",
      url: "/images/abhi.jpg",
      department: "Turner",
      rating: 4.8,
      students: 1100,
      achievements: "Best Plumber Award 2019"
    },
    {
      id: 12,
      name: "Mr. Sandeep Singh",
      designation: "Instructor - Welder",
      qualification: "M.Com, MBA Finance",
      experience: "10+ Years",
      expertise: "Tally, GST, Income Tax",
      url: "/images/sandeep.jpg",
      department: "Welder",
      rating: 4.9,
      students: 1500,
      achievements: "Tally Certified Trainer"
    },
    {
      id: 13,
      name: "Mr. Anil Kumar Yadav",
      designation: "Electrician Expert",
      qualification: "Diploma in Refrigeration",
      experience: "14+ Years",
      expertise: "AC Repair, Refrigerator Service",
      url: "/images/anil.jpg",
      department: "Electrician",
      rating: 4.8,
      students: 890,
      achievements: "HVAC Excellence Award"
    },
    {
      id: 14,
      name: "Mr. Shailendra Kumar Rao",
      designation: "Employeebility Skill Trainer",
      qualification: "Diploma in Beauty Culture",
      experience: "9+ Years",
      expertise: "Makeup, Hair Styling, Skin Care",
      url: "/images/shaile.jpg",
      department: "Employeebility Skill",
      rating: 4.9,
      students: 1200,
      achievements: "State Beauty Award 2022"
    },
    {
      id: 15,
      name: "Mr. Mukesh Prajapati",
      designation: "Engineering Drawing Expert",
      qualification: "Diploma in Electronics",
      experience: "11+ Years",
      expertise: "Hardware Repair, Software Flashing",
      url: "/images/mukesh.jpg",
      department: "Engineering Drawing",
      rating: 4.8,
      students: 1350,
      achievements: "Best Mobile Trainer"
    },
    {
      id: 16,
      name: "Mr. Ashok Kumar Arya",
      designation: "WCS Expert",
      qualification: "MA English, B.Ed",
      experience: "10+ Years",
      expertise: "Communication, Public Speaking",
      url: "/images/ashok.jpg",
      department: "WCS",
      rating: 4.9,
      students: 2000,
      achievements: "Cambridge Certified Trainer"
    },
    {
      id: 17,
      name: "Mr. Rudra Sarraf",
      designation: "CHNM Expert",
      qualification: "ITI Painter, Diploma",
      experience: "13+ Years",
      expertise: "Wall Painting, Spray Painting",
      url: "/images/rudra.jpg",
      department: "CHNM",
      rating: 4.7,
      students: 720,
      achievements: "Industrial Painter Award"
    },
    {
      id: 18,
      name: "Mrs. Pooja Kushwaha",
      designation: "Cosmetology",
      qualification: "Diploma in Fashion Design",
      experience: "12+ Years",
      expertise: "Dress Making, Embroidery",
      url: "/images/pooja.jpg",
      department: "Cosmetology",
      rating: 4.8,
      students: 1850,
      achievements: "Best Tailoring Trainer"
    },
    {
      id: 19,
      name: "Mr. Ravi Kumar Verma",
      designation: "Finance Executive Expert",
      qualification: "ITI Carpentry",
      experience: "16+ Years",
      expertise: "Furniture Making, Wood Carving",
      url: "/images/ravikumar.jpg",
      department: "Finance Executive",
      rating: 4.8,
      students: 980,
      achievements: "Best Carpenter Award"
    },
    {
      id: 20,
      name: "Mr. Rama Kant Shukla",
      designation: "Instructor - Fitter",
      qualification: "MBA Marketing",
      experience: "7+ Years",
      expertise: "SEO, Social Media, Google Ads",
      url: "/images/ramakant.jpg",
      department: "Fitter",
      rating: 4.9,
      students: 1650,
      achievements: "Google Certified"
    },
    {
      id: 21,
      name: "Mr. Aditya Kumar",
      designation: "MMV Expert",
      qualification: "Diploma in Food Tech",
      experience: "10+ Years",
      expertise: "Food Preservation, Packaging",
      url: "/images/aditya.jpg",
      department: "MMV",
      rating: 4.7,
      students: 580,
      achievements: "Food Safety Certified"
    },
    {
      id: 22,
      name: "Mr. Adesh Kumar Yadav",
      designation: "Turner Instructor",
      qualification: "Certified Yoga Teacher",
      experience: "15+ Years",
      expertise: "Hatha Yoga, Meditation",
      url: "/images/adesh.jpg",
      department: "Turner",
      rating: 4.9,
      students: 3000,
      achievements: "International Yoga Award"
    },
    {
      id: 23,
      name: "Mr. Sunil Kumar",
      designation: "Welder Instructor",
      qualification: "Certified Yoga Teacher",
      experience: "15+ Years",
      expertise: "Hatha Yoga, Meditation",
      url: "/images/sunil.jpg",
      department: "Welder",
      rating: 4.9,
      students: 3000,
      achievements: "International Yoga Award"
    },

  ]

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