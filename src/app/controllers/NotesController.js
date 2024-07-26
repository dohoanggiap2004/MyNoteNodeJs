const User = require('../models/User')
const Note = require('../models/Note')
const mongoose = require("mongoose");
const mongooseutil = require('../../util/mongoose')
class NotesController {
    //get notes
    show(req, res, next){
        const user = req.session.user
        
        Note.find({user: user._id})
            .then((notes) => {
                notes = mongooseutil.mutilpleMongooseToObject(notes)
                res.render('../../resources/views/partials/dashboard.hbs', {notes})
            })
            .catch(next)
    }

    create(req, res, next){
        res.render('../../resources/views/notes/create.hbs')
    }

    save(req, res, next){
        const user = req.session.user
        const newNote = new Note({
            user: user,
            title: req.body.title,
            body: req.body.body
        })
        newNote.save()
            .then(() => {
                Note.find({user: user._id})
                .then(() => {
                    res.redirect('/dashboard')
                })
                .catch(next)
            })
            .catch(next)
    }
    //show detail
    detail(req, res, next){
        const user = req.session.user
        const id = req.params.id
        Note.findOne({_id: id})
            .then((note) => {
                note = mongooseutil.singleMongooseToObject(note)
                res.render('../../resources/views/notes/detail.hbs', {note})
            })
            .catch(next)
    }

    //update [post]
    update(req, res, next){
        const id = req.params.id
        Note.updateOne(
            {_id: id},
            {
            $set: {
                title: req.body.title,
                body: req.body.body
            }
        })
        .then(() => {
            res.redirect('/dashboard')
        })
        .catch(next)
        }
        //delete [post]
        delete(req, res, next){
            const id = req.params.id
            Note.deleteOne({_id: id})
            .then(() => {
                res.redirect('/dashboard')
            })
            .catch(next)
        }
    }

module.exports = new NotesController();