const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('../models/Product');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce')
  .then(async () => {
    await Product.deleteMany();
    await User.deleteMany();

    // Create Admin User
    const adminPass = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: adminPass,
      mobile: '9876543210',
      isAdmin: true,
    });

    // Correct Product Data matching schema
    const products = [
      {
        name: 'Smart Watch',
        images: ['https://via.placeholder.com/400'],
        price: 2999,
        discountPrice: 2499,
        description: 'A stylish and feature-packed smart watch.',
        category: 'Electronics',
        brand: 'Noise',
        rating: 4.2,
        numReviews: 18,
        countInStock: 10,
        tags: ['watch', 'smartwatch', 'electronics'],
        isFeatured: true
      },
      {
        name: 'Wireless Earbuds',
        images: ['https://via.placeholder.com/400'],
        price: 1999,
        discountPrice: 1599,
        description: 'High-quality wireless earbuds with deep bass.',
        category: 'Electronics',
        brand: 'Boat',
        rating: 4.5,
        numReviews: 25,
        countInStock: 15,
        tags: ['earbuds', 'audio', 'electronics'],
        isFeatured: false
      }
    ];

    await Product.insertMany(products);

    console.log('🔥 Database Seeded Successfully!');
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
