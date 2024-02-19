const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.getAllUsers = async(req, res)=>{
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            usercount: users.length,
            success: true,
            message:'all users',
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message:'Error in getting all users',
            error
        })
    }
};

exports.registerUser =async(req,res)=>{
    try {
        const {username,email,password} = req.body
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:'Please fill all the fields'
            })
        }
        //check existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).send({
                success:false,
                message:'user already registered'
            })
        }
         const hashPassword = await bcrypt.hash(password,5)
        // password = hashPassword
        //save user
        const user = new userModel({username,email,password: hashPassword})
        await user.save();
        return res.status(200).send({
            success:true,
            message:'new user created',
            user
        })
    }catch (error) {
        console.log(error)
        return res.status(500).send({
            message:'error in register',
            success: false,
            error
        }
    )
}};

exports.loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(401).send({
                success: false,
                message: 'please provide email or password'
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(200).send({
                success: false,
                message: 'email not registered'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send({
                success:false,
                message: 'invalid username or password'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'login successful',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message:"Error in login user",
            error
        })
    }
};