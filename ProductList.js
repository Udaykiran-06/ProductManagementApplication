import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FeaturedProducts from '../components/FeaturedProducts';
import API from '../services/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await API.get('/products');
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Delete this product?')) {
      await API.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <FeaturedProducts />
      
      <h2>Product List</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onDelete={deleteProduct} />
        ))}
      </div>
    </div>
  );
}