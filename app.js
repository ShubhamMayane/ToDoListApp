const express=require("express");

const app=express();


const port =process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server is Running On Port "+port);
});


//request Handler Function Call
app.get("/",function(req,res){
    res.send("<h1>Shree Swami Samartha</h1>")
});