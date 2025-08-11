import { Link } from 'react-router-dom';

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`} className="product-link">
        <img 
          src={product.imageUrl || '/images/image2.jpeg'} 
          alt={product.name}
          className="product-image"
        />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>₹{product.price}</strong></p>
      </Link>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
}