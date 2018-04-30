'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routeToMid = require("./routes/index");

// app.use("/",bodyParser.json)

app.use(bodyParser.json())
app.use("/",routeToMid)
app.get("/",(req,res)=>{
    
    res.redirect("/index")
});





module.exports = app; // this line is only used to make testing easier.

// remember to plug in your router and any other middleware you may need here.

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
