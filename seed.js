const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB for seeding');
  seedProducts();
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Sample product data
const sampleProducts = [
  {
    name: 'White Shirt',
    price: 12999,
    description: 'Latest smartphone with 6.5" AMOLED display, 108MP camera, and 5G connectivity',
    category: 'Mens',
    imageUrl: '/images/image3.jpeg'
  },
  {
    name: 'Blue Jeans',
    price: 49999,
    description: 'High-performance laptop with 16GB RAM, 512GB SSD, and dedicated graphics card',
    category: 'Mens',
    imageUrl: '/images/image4.jpeg'
  },
  {
    name: 'Fit Jeans',
    price: 1999,
    description: 'Wireless headphones with active noise cancellation and 30-hour battery life',
    category: 'Womens',
    imageUrl: '/images/image5.jpg'
  },
  {
    name: 'Shirt',
    price: 3499,
    description: 'Automatic coffee maker with programmable timer and built-in grinder',
    category: 'Mens',
    imageUrl: '/images/image6.jpg'
  },
  {
    name: 'Shoe',
    price: 2999,
    description: 'Smart watch with heart rate monitor, sleep tracking, and 7-day battery life',
    category: 'Mens',
    imageUrl: '/images/image7.jpeg'
  },
  {
    name: 'Jeans',
    price: 8999,
    description: 'HEPA air purifier with PM2.5 filter and air quality indicator',
    category: 'Womens',
    imageUrl: '/images/image8.jpeg'
  },
  {
    name: 'Shirt',
    price: 32999,
    description: '55-inch 4K Smart LED TV with HDR and voice control',
    category: 'Electronics',
    imageUrl: '/images/image9.jpeg'
  },
  {
    name: 'T shirt',
    price: 1499,
    description: 'True wireless earbuds with touch controls and water resistance',
    category: 'Trendy',
    imageUrl: '/images/image10.jpeg'
  },
  {
    name: 'Shoes',
    price: 15999,
    description: 'Smart robot vacuum with mapping technology and app control',
    category: 'Formal wear',
    imageUrl: '/images/image11.jpeg'
  },
  {
    name: 'Jeans',
    price: 24999,
    description: 'Mirrorless digital camera with 24MP sensor and 4K video recording',
    category: 'Fit',
    imageUrl: '/images/image12.jpeg'
  }
];

// Function to seed products
async function seedProducts() {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`Added ${createdProducts.length} products`);
    
    // Close connection
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding products:', error);
    mongoose.connection.close();
  }
}