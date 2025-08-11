import { useState, useEffect } from 'react';
import ProductGallery from '../components/ProductGallery';

const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  
  useEffect(() => {
    // Collect all available product images
    const images = [
      '/images/image2.jpeg',
      '/images/image3.jpeg',
      '/images/image4.jpeg',
      '/images/image5.jpg',
      '/images/image6.jpg',
      '/images/image7.jpeg',
      '/images/image8.jpeg',
      '/images/image9.jpeg',
      '/images/image10.jpeg',
      '/images/image11.jpeg',
      '/images/image12.jpeg'
    ];
    
    setAllImages(images);
  }, []);
  
  return (
    <div className="gallery-page">
      <h1>Product Image Gallery</h1>
      <p>Browse our collection of product images</p>
      
      {allImages.length > 0 && (
        <ProductGallery images={allImages} />
      )}
    </div>
  );
};

export default Gallery;