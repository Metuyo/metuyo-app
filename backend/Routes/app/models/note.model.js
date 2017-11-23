var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    title: String,
    location: String,
    message: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);