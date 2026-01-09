const bcrypt = require("bcrypt");
const User = require('../models/usermodel')

//register
async function register(req, res){
    const {username, email, password} = req.body;
    try{

        let userr = await User.findOne({email});
        if (userr){
            return res.status(400).json({message:"User already exists"});
        }

        let usernamee = await User.findOne({username});
        if (usernamee){
            return res.status(400).json({message: "Username already exists"});
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });

        await newUser.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

//login


// async function login(req,res){
//     const {email,password} = req.body

//     try{
//     };
// }


//forgot_password

//reset_password

//new_password

module.exports = { register };