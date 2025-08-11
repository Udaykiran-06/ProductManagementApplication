import { useState, useEffect } from 'react';

const FeaturedProducts = () => {
  const featuredImages = [
    { id: 1, src: '/images/image7.jpeg', title: 'Premium Product' },
    { id: 2, src: '/images/image8.jpeg', title: 'Featured Item' },
    { id: 3, src: '/images/image9.jpeg', title: 'New Arrival' },
    { id: 4, src: '/images/image10.jpeg', title: 'Best Seller' },
    { id: 5, src: '/images/image11.jpeg', title: 'Limited Edition' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate carousel when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, featuredImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % featuredImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="featured-products-section">
      <h2>Featured Products</h2>
      
      <div 
        className="featured-products-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="featured-products-container">
          {featuredImages.map((image, index) => (
            <div 
              key={image.id}
              className={`featured-product-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
            >
              <img src={image.src} alt={image.title} />
              <div className="featured-product-info">
                <h3>{image.title}</h3>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control prev" onClick={handlePrev}>❮</button>
        <button className="carousel-control next" onClick={handleNext}>❯</button>
        
        <div className="carousel-indicators">
          {featuredImages.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;