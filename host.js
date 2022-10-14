const express = require("express");
const fs = require("fs");
const path = require("path");
const mongo = require("./mongoose.js");
const app = express();

app.use("/static",express.static("static"));
app.use(express.urlencoded());

app.set('view engine', 'pug');

app.get("/", (req,res)=>{
    res.render('login');
})
app.post("/login", (req,res)=>{
    console.log(req.body);

    mongo.login.findOne(req.body,(err,docs)=>
    {
    if (err){
        console.log(err);
    }
    else{
        if (docs){
        res.render('index');
        }
        else {
        res.render('login');
        }
    }
    });
    // res.status(200).send("This is the home page through post method.");
})
app.post("/", (req,res)=>{
    dta = req.body;
    if(dta.name =="" && dta.phone =="" && dta.email =="" && dta.message =="" )
    {
        dta = {};
    }
    else{
    mongo.run(dta);
        }
    res.render('index');
})
app.listen(80,()=>{
    console.log("Server running on http://localhost .")
})

