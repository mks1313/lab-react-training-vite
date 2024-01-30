import { useState } from "react";
import "../Carousel.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handleLeftClick}>
        Left
      </button>
      <div className="carousel-content">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>

      <button className="carousel-button" onClick={handleRightClick}>
        Right
      </button>
    </div>
  );
};

export default Carousel;
