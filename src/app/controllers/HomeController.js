//const course = require("../models/Course");
//const mongooseUtil = require("../../util/mongoose");
//const mongoose = require("mongoose");
class HomeController {
    //get home
    home(req, res, next){
        res.render('home.hbs')
    }
}

module.exports = new HomeController();
