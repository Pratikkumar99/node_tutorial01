const mongoose = require('mongoose');

//define the mongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels";//Replace 'mydatabase' with your database name="hotels"
mongoose.connect(mongoURL,{
    useNewUrlParser : true,//these two true written because we use new url mongoURL for connection establishment
    useUnifiedTopology : true
})
//Get the default connection 
//Mongoose maintains a default connection representing the mongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection 

db.on('connected',()=>{
    console.log('connected to mongoDB server');
})
db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server');
})
db.on('error',()=>{
    console.log('error to mongoDB server');
})

//Export the database connection
module.exports = db;


const mongoose = require('mongoose');
require('dotenv').config();

//define the mongoDB connection URL
//const mongoURI = process.env.DB_OFFLINE_URL;
const mongoURI =process.env.DB_URL;


// // Connect to MongoDB
// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });


//     const db = mongoose.connection;

//     // Event listeners for MongoDB connection
//     db.on('connected', () => {
//         console.log('Mongoose connected to MongoDB');
//     });
    
//     db.on('error', (err) => {
//         console.error('Mongoose connection error:', err);
//     });
    
//     db.on('disconnected', () => {
//         console.log('Mongoose disconnected. Attempting to reconnect...');
//         mongoose.connect(mongoURI).catch((err) => console.error('Reconnection failed:', err));
//     });
    
// //Export the database connection   
// module.exports = db;