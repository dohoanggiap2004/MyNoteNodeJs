const mongoose = require('mongoose')
const User = require('../models/User')

class LoginController {
    //get login
    login(req, res, next){
        res.render('../../resources/views/partials/login.hbs')
    }

    //check account
    check(req, res, next){
        const userF = User.findOne({account: req.body.account})
            .then((userF) =>{   
                if (userF && userF.password === req.body.password) {
                    req.session.user = userF;
                    req.session.save((err) => {
                        if (err) {
                            return next(err);
                        }
                        res.redirect('/');
                    });
                } else {
                    const error = 'Invalid account or password';
                    res.render('../../resources/views/partials/login.hbs', { error });
                }
            })
            .catch(next)
       
    }

    //log out 
    out(req, res, next){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = new LoginController();