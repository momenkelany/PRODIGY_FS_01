const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/authdb');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Please ensure MongoDB is running on your system.');
    console.log('You can start MongoDB with: mongod --dbpath /path/to/your/db');
    process.exit(1);
  }
};

module.exports = connectDB;