const express = require("express");
const bodyParser = require("body-parser")
const routePages= require('./routes/route')
const app=express();




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))


app.use(routePages);





app.listen(5000, () => {
    console.log("server started")
})
