const express=require('express');
const app=express();
const errorMiddleware=require('./middleware/error');
<<<<<<< HEAD

app.use(express.json());

//Route import
const product=require("./routes/productRoute");
app.use("/api/v1",product);
=======
const cookieParser=require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Route imports
const product=require("./routes/productRoute");
const user=require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
>>>>>>> e92a18e (user model and configuration)

//Middleware for error
app.use(errorMiddleware);

module.exports =app;