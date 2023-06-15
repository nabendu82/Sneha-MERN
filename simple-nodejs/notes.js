const fs = require('fs')

const newNote = function(title, body){
    const notes = uploadNotes();
    notes.push({ title, body });
    fs.writeFileSync('notepad.json', JSON.stringify(notes))
}

const uploadNotes = function() {
    try {
        const datBuffer = fs.readFileSync('notepad.json');
        const dataJSON = datBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

module.exports = { newNote }