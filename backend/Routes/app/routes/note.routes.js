module.exports = function(app) {
    
    var notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/event', notes.create);

    // Retrieve all Notes
    app.get('/event', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/event/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/event/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/event/:noteId', notes.delete);
}