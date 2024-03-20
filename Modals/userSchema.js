// Import mongoose
const mongoose = require('mongoose')

// Schema 
const userSchema = new mongoose.Schema({

    username:{
        type:String, 
        require:true,
        min:[3, 'Atleast 3 characters required, but got {value}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    password:{
        type:String,
        require:true
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    profile:{
        type:String
    }
})

// Create model
const users = mongoose.model("users",userSchema) // Collection name "users"

// Export modal
module.exports = users  