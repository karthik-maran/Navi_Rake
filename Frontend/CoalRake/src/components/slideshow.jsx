import React, { useState, useEffect } from 'react';
import '../Styles/SlideShow.css'
const slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      </div>
      
      <button className="slideshow-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="slideshow-button next" onClick={nextSlide}>&#10095;</button>
      <div className="slideshow-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="slideshow-text">
        <h6> WELCOME TO RAKE NAVIGATION</h6>
      </div>
    </div>
    
  );
};

export default slideshow;
