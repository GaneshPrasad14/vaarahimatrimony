require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

console.log('Testing connection to:', uri.replace(/:([^:@]+)@/, ':****@'));

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Connection failed!');
        console.error('Error name:', err.name);
        console.error('Error code:', err.code);
        console.error('Error codeName:', err.codeName);
        console.error('Error message:', err.message);
        if (err.errorResponse) {
            console.error('Detailed response:', JSON.stringify(err.errorResponse, null, 2));
        }
        process.exit(1);
    });
