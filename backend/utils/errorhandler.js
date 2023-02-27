class ErrorHandler extends Error{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode=statusCode;
<<<<<<< HEAD
        Error.captureStackTrace(this.constructor)
=======
        Error.captureStackTrace(this,this.constructor)
>>>>>>> e92a18e (user model and configuration)
    }
}

module.exports=ErrorHandler;