// Logic to resolve a request
// Import model
const users = require('../Modals/userSchema')

// Import jwt
const jwt = require('jsonwebtoken')


// Logic for register
exports.register = async (req, res) => {

    console.log('Inside controller register function');
    // Extract data from request body
    const { username, email, password } = req.body // Can be directly destructured, as we have parsed .json which has been converted into javascript object in index.js in step number 6
    try {
        const existUser = await users.findOne({ email }) // This users is model_name and collection_name is specified inside model(userSchema)
        if (existUser) {
            res.status(406).json('Account already exists, please login') // Better to give res 406 - unprocessable entity 
        }
        else {
            // Create an object for the model
            const newUser = new users({
                username,
                email,
                password,
                github: "",
                linkedin: "",
                profile: ""
            })
            // Save function in mongoose - to permanently store data in mongoDB
            await newUser.save()
            // Response
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json('Register request failed due to ', err)
    }

}

// Logic for login
exports.login = async (req, res) => {
    console.log('Inside controller login function');

    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email, password })
        console.log(existingUser);

        if (existingUser) {

            const token = jwt.sign({ userId: existingUser._id }, "supersecretkey12345") //1st arg - data that is send inside the token
            //2nd arg - key based on which the token is generated

            res.status(200).json({
                existingUser,
                token
            })
        }
        else {
            res.status(406).json('Incorrect email or password')
        }
    } catch (err) {
        res.status(401).json(`Login failed due to ${err}`)
    }
}

// Edit profile
exports.editUser = async (req, res) => {
    const userId = req.payload
    const { username, email, password, github, linkedin, profile } = req.body
    const profileImage = req.file ? req.file.filename : profile

    try {

        const updateUser = await users.findByIdAndUpdate({ _id: userId }, { username, email, password, github, linkedin, profile: profileImage }, { new: true })

        await updateUser.save()
        res.status(200).json(updateUser)

    } catch (err) {

        res.status(401).json(err)

    }
}