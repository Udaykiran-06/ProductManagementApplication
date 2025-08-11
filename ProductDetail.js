import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={handleBack}>← Back to Products</button>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.imageUrl || '/images/image2.jpeg'} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-category">Category: {product.category}</p>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      
      <div className="related-products">
        <h2>You might also like</h2>
        <div className="related-products-placeholder">
          <p>Related products will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;