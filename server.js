//jshint esversion:6

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3030;
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


app.listen(PORT, () => {
    console.log('server has started on port ${PORT}');
});