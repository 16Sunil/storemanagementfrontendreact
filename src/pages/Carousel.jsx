import React, { useState, useEffect } from "react";
//import carousel1 from "../images/carousel_1.jpeg";

const Carousel = () => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b31a526431a68267.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/579b0baa6dfcf7e2.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e7075cd18f9cf5e4.jpg?q=20",
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div>
       <header className="relative bg-blue-500"> {/* Change bg-blue-500 to your desired color class */}
      <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over Rs.499
      </p>
    </header>

    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
     
    </div>
    </div>
  );
};

export default Carousel;
