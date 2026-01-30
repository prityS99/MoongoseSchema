const express = require("express");
const path = require("path");
const port = 3006;
const ejs = require("ejs");


app.use(express.static(path.join(__dirname,'public')))



app.set("view engine", "ejs");
app.set("views", "views");





app.listen(port, ()=>{
    console.log("Server is running in this port", port);
    
})

