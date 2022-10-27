
const express = require("express");
const { STATUS_CODES } = require("node:http");
const https = require('node:https');


const app = express();

// app.get("/", function(req,res){
//     res.send("Hello World");
// });

app.get("/", function(req, res){
    res.json({
        "slackUsername": "clughas", 
        "backend": true,
        "age": 28,
        "bio": "Hi HNG9, I am Charles Lughas. I am a beginner backend developer and love solving programming challenges. I look forward to working with HNG.",

    });
});


app.listen(3000, () => {
    console.log("server has started on port 3000");
});