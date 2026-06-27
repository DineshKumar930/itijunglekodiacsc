import React, { useState } from "react";
import "./Gallery.css";
import {
  Calendar,
  ArrowRight,
  Image as ImageIcon,
  Newspaper,
  Sun,
  Moon,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    title: "Workshop Practical Training",
    category: "Fitter Trade",
    description: "Hands-on training sessions with industry-standard equipment and tools."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    title: "Electrician Lab Session",
    category: "Electrician",
    description: "Practical electrical wiring and circuit design sessions in modern labs."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop",
    title: "Campus Activities",
    category: "Campus Life",
    description: "Vibrant campus life with cultural events and student activities."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581092335877-6c5f5f6b9b8c?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581092335877-6c5f5f6b9b8c?w=600&h=400&fit=crop",
    title: "Industrial Visit",
    category: "Training",
    description: "Industrial visits to top companies for real-world exposure."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    title: "Skill Competition",
    category: "Achievements",
    description: "Inter-college skill competitions showcasing student talent."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    title: "Placement Drive",
    category: "Placement",
    description: "Successful placement drives with top recruiters from the industry."
  }
];

const Gallery = () => {
  const [isDark, setIsDark] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section className={`gallery-section ${isDark ? 'dark' : 'light'}`}>
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>

        <div className="section-header">
          <span className="subtitle">
            <Sparkles size={18} />
            Explore Our Campus
          </span>

        

          <p>
            Discover practical training sessions, workshops, achievements,
            placement activities and latest updates from our institute.
          </p>

          <div className="header-badges">
            <span className="badge">
              <ImageIcon size={16} />
              {galleryImages.length}+ Photos
            </span>
            <span className="badge">
              <Newspaper size={16} />
              Latest Updates
            </span>
            <span className="badge">
              <Calendar size={16} />
              2026 Events
            </span>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div 
              className="gallery-card" 
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img src={item.thumbnail} alt={item.title} loading="lazy" />
              
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <span className="category-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <div className="card-actions">
                    <span className="view-more">
                      <ZoomIn size={16} /> Click to view full
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-shimmer"></div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <button className="load-more-btn">
            Load More <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={28} />
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
              <ChevronLeft size={32} />
            </button>
            
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              <ChevronRight size={32} />
            </button>

            <div className="lightbox-content">
              <img 
                src={galleryImages[currentIndex].image} 
                alt={galleryImages[currentIndex].title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <span className="lightbox-category">
                  {galleryImages[currentIndex].category}
                </span>
                <h2 className="lightbox-title">
                  {galleryImages[currentIndex].title}
                </h2>
                <p className="lightbox-description">
                  {galleryImages[currentIndex].description}
                </p>
                <div className="lightbox-counter">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;