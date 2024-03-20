// 1.Import dotenv
// .config() Loads .env file contents into process.env by default
require('dotenv').config()

// 2.Import express module
const express = require('express')

// 3.Import cors
const cors = require('cors')

    // Import router
    const router = require('./Routing/router')

    // Import connection.js
    require('./DB/connection')

// 4.Create server
// Creates an Express application. The express() function is a top-level function exported by the express module
const pfServer = express()

// 5.Use of cors by server
pfServer.use(cors())

// 6.Parsing json - Returns middleware that only parses json - used to convert .json to js objects
pfServer.use(express.json())

    // Server using router
    pfServer.use(router)

    // Use of uploads folder by server
    // 1st arg - how other applications use this folder
    // 2nd arg - to export that particular folder 
    pfServer.use('/uploads', express.static('./uploads'))

// 7.Setup port - By default, server runs on 3000
const PORT = 4000 || process.env

// 8.Run server
pfServer.listen(PORT, () => {
    console.log(`SERVER RUNNING SUCCESSFULLY ON PORT ${PORT}`);
})

// If a user run this port like this, user will get an error because user have not specified how to resolve the request or what response should user get for this request

// GET request
pfServer.get('/', (req, res) => {
    res.send('<h1 style="color:red">project fair running successfully</h1>') //To get auto recompilation for node, install nodemon globally (npm i -g nodemon)
})

/* // POST request
pfServer.post('/', (req, res) => {
    res.send('Post request')
})

// PUT request
pfServer.put('/', (req, res) => {
    res.send('Put request')
}) */