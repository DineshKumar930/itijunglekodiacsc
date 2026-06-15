import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { 
  Star, Quote, Phone, Mail, MapPin, Clock, User, GraduationCap, 
  Award, Users, BookOpen, TrendingUp, ArrowRight, Calendar, 
  MessageCircle, CheckCircle
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import the CSS file
import './HeroSlider.css';

const HeroSlider = () => {
  const marqueeRef = useRef(null);

  // Hero Slider Data
  const heroSlides = [
    {
      id: 1,
      title: "राजकीय आईटीआई जंगल कोड़िया में आपका स्वागत है",
      subtitle: "कौशल विकास से उज्ज्वल भविष्य की ओर",
      description: "धुनिक तकनीकी शिक्षा एवं व्यावहारिक प्रशिक्षण के माध्यम से युवाओं को आत्मनिर्भर और रोजगार योग्य बनाने के लिए समर्पित।",
      image: "images/iti.png",
      buttonText: "अभी प्रवेश लें",
      buttonLink: "/admissions"
    },
    {
      id: 2,
      title: "आधुनिक कार्यशालाएँ एवं प्रयोगशालाएँ",
      subtitle: "करके सीखें, आगे बढ़ें",
      description: "अत्याधुनिक मशीनों, उपकरणों और अनुभवी प्रशिक्षकों के मार्गदर्शन में गुणवत्तापूर्ण तकनीकी प्रशिक्षण प्राप्त करें।",
      image: "/images/iti2.png",
      buttonText: "Explore Courses",
      buttonLink: "/courses"
    },
    {
      id: 3,
      title: "सपनों को दें नई उड़ान",
      subtitle: "कौशल, आत्मविश्वास और रोजगार की दिशा में एक कदम",
      description: "राजकीय आईटीआई जंगल कोड़िया आपके उज्ज्वल भविष्य के लिए गुणवत्तापूर्ण तकनीकी शिक्षा और बेहतर अवसर प्रदान करता है।",
      image: "/images/iti3.png",
      buttonText: "View Placements",
      buttonLink: "/placements"
    },
    {
      id: 4,
      title: "सपनों को दें नई उड़ान",
      subtitle: "कौशल, आत्मविश्वास और रोजगार की दिशा में एक कदम",
      description: "राजकीय आईटीआई जंगल कोड़िया आपके उज्ज्वल भविष्य के लिए गुणवत्तापूर्ण तकनीकी शिक्षा और बेहतर अवसर प्रदान करता है।",
      image: "/images/iti4.png",
      buttonText: "View Placements",
      buttonLink: "/placements"
    }
    
  ];

  // Testimonials Data
  const testimonialsData = [
    {
      id: 1,
      name: 'Rahul Sharma',
      trade: 'Electrician (2022 Batch)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      review: 'The practical training at ITI Jungle Kodia is outstanding. The workshops are well-equipped and the instructors are very knowledgeable. I got placed immediately after completion.',
      company: 'Tata Power',
      position: 'Junior Electrician'
    },
    {
      id: 2,
      name: 'Priya Patel',
      trade: 'COPA (2023 Batch)',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      review: 'Excellent computer lab and experienced faculty. The curriculum is industry-relevant and they also provide soft skills training. Highly recommended!',
      company: 'Infosys',
      position: 'Computer Operator'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      trade: 'Welder (2021 Batch)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4,
      review: 'The welding workshop is top-notch with modern equipment. Faculty members are very supportive and helped me master advanced welding techniques.',
      company: 'L&T',
      position: 'Senior Welder'
    },
    {
      id: 4,
      name: 'Sneha Singh',
      trade: 'Mechanic Diesel (2022 Batch)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      review: 'Best decision I ever made! The placement support is amazing. The practical knowledge gained here is invaluable for my career.',
      company: 'Maruti Suzuki',
      position: 'Diesel Mechanic'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      trade: 'Fitter (2023 Batch)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      review: 'Great infrastructure and teaching methodology. The industry visits and guest lectures helped us understand real-world applications.',
      company: 'BHEL',
      position: 'Fitter'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      trade: 'Electronics Mechanic (2022 Batch)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4,
      review: 'The faculty goes above and beyond to help students. The modern electronics lab and practical sessions are excellent.',
      company: 'Samsung',
      position: 'Electronics Technician'
    }
  ];

  // Trades/Courses Data
  const tradesData = [
    {
      id: 1,
      name: 'Electrician',
      duration: '2 Years',
      seats: 40,
      icon: <Zap size={40} />,
      description: 'Learn wiring, motor control, house wiring, industrial electrical systems.'
    },
    {
      id: 2,
      name: 'Welder',
      duration: '1 Year',
      seats: 30,
      icon: <Award size={40} />,
      description: 'Master arc welding, gas welding, TIG/MIG techniques and fabrication.'
    },
    {
      id: 3,
      name: 'COPA',
      duration: '1 Year',
      seats: 30,
      icon: <Monitor size={40} />,
      description: 'Computer operations, programming basics, DTP, and office automation.'
    },
    {
      id: 4,
      name: 'Electronics Mechanic',
      duration: '2 Years',
      seats: 35,
      icon: <Tool size={40} />,
      description: 'Diesel engine repair, maintenance, and troubleshooting.'
    },
    {
      id: 5,
      name: 'Fitter',
      duration: '2 Years',
      seats: 40,
      icon: <Wrench size={40} />,
      description: 'Assembly, fitting, machining, and precision measurement techniques.'
    },
    {
      id: 6,
      name: 'CHNM',
      duration: '2 Years',
      seats: 35,
      icon: <Cpu size={40} />,
      description: 'PCB design, circuit troubleshooting, and electronic device repair.'
    },
    {
      id: 7,
      name: 'MMV',
      duration: '2 Years',
      seats: 35,
      icon: <Tool size={40} />,
      description: 'Diesel engine repair, maintenance, and troubleshooting.'
    },
    {
      id: 8,
      name: 'RAC',
      duration: '2 Years',
      seats: 40,
      icon: <Wrench size={40} />,
      description: 'Assembly, fitting, machining, and precision measurement techniques.'
    },
    {
      id: 9,
      name: 'Physiotherapy',
      duration: '2 Years',
      seats: 35,
      icon: <Cpu size={40} />,
      description: 'PCB design, circuit troubleshooting, and electronic device repair.'
    },
    ,
    {
      id: 10,
      name: 'Finance Executive',
      duration: '2 Years',
      seats: 35,
      icon: <Tool size={40} />,
      description: 'Diesel engine repair, maintenance, and troubleshooting.'
    },
    {
      id: 11,
      name: 'Turner',
      duration: '2 Years',
      seats: 40,
      icon: <Wrench size={40} />,
      description: 'Assembly, fitting, machining, and precision measurement techniques.'
    },
    {
      id: 12,
      name: 'Cosmetology',
      duration: '2 Years',
      seats: 35,
      icon: <Cpu size={40} />,
      description: 'PCB design, circuit troubleshooting, and electronic device repair.'
    }
  ];

  // Marquee News Items
  const newsItems = [
    "🎓 Admissions Open for 2024-25 Session | Limited Seats Available",
    "🏆 Placement Drive: Tata Motors recruiting our final year students on 25th March",
    "📢 New Advanced Welding Workshop Inaugurated by Industry Experts",
    "💼 95% of 2023 batch placed in top companies | Congratulations to all!",
    "🔧 Free Skill Development Workshop for Women on Every Saturday",
    "📅 Annual Tech Fest 'Kaushal 2024' scheduled for 15th April"
  ];

  // Auto-scroll marquee effect
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let scrollAmount = 0;
      const speed = 1;
      
      const scroll = () => {
        if (marquee) {
          scrollAmount += speed;
          if (scrollAmount >= marquee.scrollWidth / 2) {
            scrollAmount = 0;
          }
          marquee.style.transform = `translateX(-${scrollAmount}px)`;
        }
        requestAnimationFrame(scroll);
      };
      
      const animation = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animation);
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.hero-pagination' }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
          loop={true}
          className="hero-slider"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})` }}>
                <div className="hero-content">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-btn"
                  >
                    {slide.buttonText} <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-pagination"></div>
        <div className="hero-nav">
          <button className="hero-prev">‹</button>
          <button className="hero-next">›</button>
        </div>
      </section>

      {/* Marquee News Section */}
      <div className="marquee-wrapper">
        <div className="marquee-label">
          <Calendar size={20} />
          <span>Latest Updates</span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content" ref={marqueeRef}>
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="marquee-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <section className="principal-section">
        <div className="container">
          <div className="section-title">
            <h2>Director's Message</h2>
            <p>Words from our respected leader</p>
          </div>
          <div className="principal-content">
            <motion.div 
              className="principal-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="images/dir.png" alt="Principal" />
              <div className="principal-info">
                <h3>Mr. Akhil Kumar</h3>
                <p>Dorector, CSC SPV</p>
              </div>
            </motion.div>
            <motion.div 
              className="principal-message"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Quote size={50} className="message-quote" />
              <p>
                आईटीआई जंगल कोड़िया में, हमारा विश्वास केवल कुशल पेशेवर तैयार करने में ही नहीं, बल्कि जिम्मेदार और आदर्श नागरिकों के निर्माण में भी है। तकनीकी शिक्षा में उत्कृष्टता के प्रति हमारी प्रतिबद्धता, आधुनिक अधोसंरचना तथा उद्योगों के साथ मजबूत सहयोग यह सुनिश्चित करता है कि प्रत्येक छात्र को सफलता प्राप्त करने के सर्वोत्तम अवसर मिलें।
              </p>
              <p>
                हम विद्यार्थियों के सर्वांगीण विकास पर विशेष ध्यान देते हैं — जिसमें तकनीकी दक्षता, व्यक्तित्व एवं संचार कौशल (सॉफ्ट स्किल्स) तथा नैतिक मूल्यों का विकास शामिल है। हमारा उत्कृष्ट प्लेसमेंट रिकॉर्ड हमारे द्वारा प्रदान की जाने वाली उच्च गुणवत्ता वाली शिक्षा का प्रमाण है।

मैं आप सभी को हमारे आईटीआई परिवार का हिस्सा बनने और उज्ज्वल एवं सफल भविष्य की इस प्रेरणादायक यात्रा की शुरुआत करने के लिए हार्दिक आमंत्रण देता हूँ।
              </p>
              <div className="signature">
                <img src="https://www.signwell.com/assets/signature-icon.svg" alt="Signature" />
                <div className="signature-text">
                  <strong>Mr. Akhil Kumar</strong>
                  <span>Director</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trades/Courses Section */}
      <section className="trades-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Courses</h2>
            <p>Industry-recognized trades for a successful career</p>
          </div>
          <div className="trades-grid">
            {tradesData.map((trade, index) => (
              <motion.div 
                key={trade.id}
                className="trade-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="trade-icon">{trade.icon}</div>
                <h3>{trade.name}</h3>
                <div className="trade-details">
                  <span><Clock size={16} /> {trade.duration}</span>
                  <span><Users size={16} /> {trade.seats} Seats</span>
                </div>
                <p>{trade.description}</p>
                <button className="trade-btn">Know More <ArrowRight size={16} /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>Student Testimonials</h2>
            <p>What our students say about their journey with us</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="testimonials-slider-wrapper"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              grabCursor={true}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.testimonials-pagination' }}
              navigation={{ nextEl: '.testimonials-next', prevEl: '.testimonials-prev' }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="testimonials-slider"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card">
                    <Quote className="quote-icon" size={40} />
                    <div className="profile">
                      <div className="image-wrapper">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="profile-info">
                        <h3>{testimonial.name}</h3>
                        <p className="trade">{testimonial.trade}</p>
                      </div>
                    </div>
                    <div className="rating">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={18}
                          className={idx < testimonial.rating ? 'star-filled' : 'star-empty'}
                          fill={idx < testimonial.rating ? '#FFD700' : 'none'}
                        />
                      ))}
                    </div>
                    <p className="review">"{testimonial.review}"</p>
                    <div className="placement-info">
                      <div className="company">
                        <span className="label">Placed at:</span>
                        <strong>{testimonial.company}</strong>
                      </div>
                      <div className="position">
                        <span className="label">Position:</span>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonials-prev">‹</div>
            <div className="testimonials-next">›</div>
            <div className="testimonials-pagination"></div>
          </motion.div>

          {/* Statistics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="stats-strip"
          >
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Placed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Recruiting Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Placement Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Student Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Have questions? We're here to help you</p>
          </div>
          <div className="contact-wrapper">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Contact Information</h3>
              <p>Reach out to us for admissions, inquiries, or any assistance.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Address</strong>
                    <p>Jungle Kodia, Lucknow Road, Uttar Pradesh - 226001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <strong>Phone</strong>
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <strong>Email</strong>
                    <p>info@itijunglekodia.edu.in</p>
                    <p>admissions@itijunglekodia.edu.in</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <strong>Office Hours</strong>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Course Interested In</option>
                  <option>Electrician</option>
                  <option>Welder</option>
                  <option>COPA</option>
                  <option>Mechanic Diesel</option>
                  <option>Fitter</option>
                  <option>Electronics Mechanic</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <MessageCircle size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper icon components (to avoid external dependencies if not installed)
const Zap = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const Monitor = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const Tool = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
const Wrench = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
const Cpu = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>;

export default HeroSlider;