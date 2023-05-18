// import { MongoClient } from 'mongodb';

// // const URI = process.env.MONGO_URI;

// // export async function connectToMongoDB() {
// //   try {
// //     const client = new MongoClient(URI);
// //     await client.connect();
// //     console.log('Connected to MongoDB');
// //     return client;
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //     throw error;
// //   }
// // }


// const mongoose = require('mongoose');

// // Connect to the MongoDB database
// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
//   });

// module.exports = mongoose; 