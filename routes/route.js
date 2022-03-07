const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose")



const homeController= require('../controller/homePage');
mongoose.connect("mongodb://localhost:27017/logindb")

const app= express();
const router= express.Router();


app.use(bodyParser.urlencoded({extended: true}));

router.get('/', homeController.getHomePage);
router.post('/newsletter', homeController.postHomePage);

module.exports= router;