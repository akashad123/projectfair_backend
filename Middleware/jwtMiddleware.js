// Import jwt
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log('Inside jwtMiddleware');
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try {
        const jwtResponse = jwt.verify(token,"supersecretkey12345") // Verify returns an object which contains the secrete info and 
        console.log(jwtResponse);    
        req.payload = jwtResponse.userId
        next()    
    } catch (err) {
        res.status(401).json('Authentication failed ... Please login')
    }
}
 
module.exports = jwtMiddleware 