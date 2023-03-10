const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User=require("../models/userModel");
const sendToken=require("../utils/jwtToken");

//Register a User
exports.registerUser =catchAsyncError( async (req,res,next)=>{
    const {name,email,password} =req.body;
    const user= await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl"
        }
    });
    sendToken(user,201,res);

});
//User Login
exports.loginUser =catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    //checking if user has given both email and password'
    if(!email || !password){
        return next(new ErrorHandler("Please Enter a valid Email and Password",400))
    }
    const user= await User.findOne({email}).select("+password"); //ya select password kina gareko bhanda originally fina garda password select false rakheko thiyo 
    if(!user){
        return next(new ErrorHandler("Invalid email or password"),401);

    }
    const isPasswordMatched =user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));

    };
    sendToken(user,200,res);
});

//Logout User
exports.logout =catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()), //aile ko aile expire garauna
        httpOnly:true,
    })
    res.status(200).json({
        success:true,
        message:"Logged Out",
    });
});


