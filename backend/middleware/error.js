const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;//yedi status code bhaye tei natra default ma 500
  err.message = err.message || "Internal server Error";
  
  //Wrong Mongodb Id error
  if(err.name==='CastError'){
    const message= `Resource not found,Invalid:${err.path}`;
    err=new ErrorHandler(message,400);
  }
  
  res.status(err.statusCode).json({
    success: false,
<<<<<<< HEAD
    err: err.message,//err.stack garera complete error dekhauna ni milxa
=======
    message: err.message,//err.stack garera complete error dekhauna ni milxa
>>>>>>> e92a18e (user model and configuration)
  });
};
