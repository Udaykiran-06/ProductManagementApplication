import { useState } from 'react';
import API from '../services/api';

const availableImages = [
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

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', description: '', category: '', imageUrl: '/images/image2.jpeg' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/products', form);
    alert('Product added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      
      <div className="image-selection">
        <label htmlFor="imageUrl">Select Product Image:</label>
        <select 
          name="imageUrl" 
          value={form.imageUrl} 
          onChange={handleChange} 
          required
        >
          {availableImages.map((img, index) => (
            <option key={index} value={img}>
              Image {index + 2}
            </option>
          ))}
        </select>
        
        {form.imageUrl && (
          <div className="image-preview">
            <img 
              src={form.imageUrl} 
              alt="Preview" 
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} 
            />
          </div>
        )}
      </div>
      
      <button type="submit">Add Product</button>
    </form>
  );
}