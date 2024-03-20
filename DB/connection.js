// Import mongoose
const mongoose = require('mongoose')

// Get the connection string
const connectionString = process.env.DATABASE
/* console.log(connectionString); */

// Connect node.js/server with mongoDB
mongoose.connect(connectionString).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.log(`MongoDB failed to connect due to ${err}`);
})
