import { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <h2>Product Gallery</h2>
      
      <div className="gallery-main-image">
        <img src={selectedImage} alt="Selected product" />
      </div>
      
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`thumbnail ${image === selectedImage ? 'active' : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;