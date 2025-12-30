const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/vaarahi';

console.log('Testing connection to Localhost:', uri);

mongoose.connect(uri, { serverSelectionTimeoutMS: 2000 })
    .then(() => {
        console.log('✅ SUCCESS: Connected to Localhost!');
        process.exit(0);
    })
    .catch((err) => {
        console.log('❌ FAILED: Localhost');
        console.log(`Reason: ${err.message}`);
        process.exit(1);
    });
