
const {constants}=require("../constant")

const errorHandler=(err,req,res,next)=>{
const statuscode=res.statusCode ? res.statusCode:500;

switch (statuscode) {
    case constants.VALIDATION_ERROR:
        res.send({
            title:"validation failed",
            message:err.message,
            stackTrace: err.stack,
        })
        break;
    case constants.NOT_FOUND:
        res.send({
            title:"Not found",
            message:err.message,
            stackTrace: err.stack,
        })
        break;

    case constants.UNAUTHORIZED:
        res.send({
            title:" un authorized",
            message:err.message,
            stackTrace: err.stack,
        })
        break;

    case constants.FORBIODEN:
        res.send({
            title:" for bioden",
            message:err.message,
            stackTrace: err.stack,
        })
        break;
    case constants.SERVER_ERROR:
        res.send({
            title:"server error",
            message:err.message,
            stackTrace: err.stack,
        })
        break;

    default:
        console.log("no error all goods ")
        break;
}
}


module.exports= errorHandler;