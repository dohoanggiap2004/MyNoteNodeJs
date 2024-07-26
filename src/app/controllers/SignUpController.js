const User = require('../models/User')
const mongoose = require("mongoose");
class SignUpController {
    //get login
    signUp(req, res, next){
        res.render('../../resources/views/partials/signup.hbs')
    }

    save(req, res, next){
        if(req.body.password1 !== req.body.password2){
            res.redirect('/sign_up')
        }else{
            const newUser = new User({account: req.body.account, password: req.body.password1})
            newUser.save()
                .then(() => {
                    res.redirect('/login')
                })
                .catch(next)
        }
    }
}

module.exports = new SignUpController();