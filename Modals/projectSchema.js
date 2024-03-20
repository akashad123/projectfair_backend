// Import mongoose
const mongoose = require('mongoose')

// Project schema
const projectSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    github:{
        type:String,
        require:true
    },
    website:{
        type:String,
        require:true
    },
    overview:{
        type:String,
        require:true
    },
    projectImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

// Create model
const projects = mongoose.model("projects",projectSchema)

// Export model
module.exports = projects