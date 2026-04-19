const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler");
// const connectDB = require("./config/dnconnection");

app.use(express.json());

// app.get("/haii",(req,res)=>{
//     res.status(200).send({message:"haii"})
// });

// connectDB();

app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler);


const port=process.env.PORT || 6000;


app.listen(port, ()=>{
    console.log(`server is runing on ${port}`);
})

console.log("ok")








// const connectDB = require("./config/dbconnection");


// console.log("before db connection");
// // connectDB();






