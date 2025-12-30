const mongoose = require('mongoose');

const credentials = 'vaarahimatrimony_db_user:RxFDwJo1X4UXh9zN';
const cluster = 'cluster0.ffsdbwq.mongodb.net';
const dbName = 'vaarahi';

const uris = [
    { name: 'Auth Source: admin', uri: `mongodb+srv://${credentials}@${cluster}/${dbName}?appName=Cluster0&authSource=admin` },
    { name: 'Auth Source: vaarahi', uri: `mongodb+srv://${credentials}@${cluster}/${dbName}?appName=Cluster0&authSource=vaarahi` },
    { name: 'No Auth Source', uri: `mongodb+srv://${credentials}@${cluster}/${dbName}?appName=Cluster0` }
];

async function testConnection(config) {
    console.log(`\nTesting: ${config.name}`);
    try {
        await mongoose.disconnect();
        await mongoose.connect(config.uri, { serverSelectionTimeoutMS: 5000 });
        console.log(`✅ SUCCESS: Connected with ${config.name}`);
        return true;
    } catch (err) {
        console.log(`❌ FAILED: ${config.name}`);
        // console.log(err.message);
        if (err.codeName === 'AtlasError') {
            console.log('Reason: AtlasError (Authentication Failed)');
        } else {
            console.log(`Reason: ${err.message}`);
        }
        return false;
    }
}

async function runTests() {
    for (const config of uris) {
        if (await testConnection(config)) {
            console.log('\nFound working configuration!');
            console.log(`Please use: ${config.uri.replace(/:([^:@]+)@/, ':****@')}`);
            process.exit(0);
        }
    }
    console.log('\nAll attempts failed.');
    process.exit(1);
}

runTests();
