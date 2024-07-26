const express = require('express');
const router = express.Router();
const notesController = require('../app/controllers/NotesController.js');

router.get('/dashboard', notesController.show)
router.get('/dashboard/:id/create', notesController.create)
router.post('/dashboard/:id/save', notesController.save)
router.get('/dashboard/:id', notesController.detail)
router.post('/dashboard/:id/save', notesController.save)
router.put('/dashboard/:id/update', notesController.update)
router.delete('/dashboard/:id/delete', notesController.delete)

module.exports = router;
