const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vaarahi-matrimony';

    // Mask password in logs
    const maskedURI = mongoURI.replace(/:([^:@]+)@/, ':****@');
    console.log(`Attempting to connect to MongoDB at: ${maskedURI}`);

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;