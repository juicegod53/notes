function loadNotes() {
    let jsonNotes = localStorage.getItem("notes")

    if (jsonNotes) {
        let notes = JSON.parse(jsonNotes)
        for (let i = 0; i < notes.length; i++) {
            createNote(null, notes[i][0], notes[i][1])
        }
    }
}

function createNote(e, title = "Title here", text = "Text here") {
    const note = document.createElement('div');
    note.className = 'note';

    const noteTop = document.createElement('div');
    noteTop.className = 'note-top';

    const noteTitle = document.createElement('h2');
    noteTitle.className = 'note-title';
    noteTitle.textContent = title;
    noteTitle.setAttribute('contenteditable', 'true')

    // const noteButtons = document.createElement('div');
    // noteButtons.className = 'note-buttons';

    // const editButton = document.createElement('button');
    // editButton.textContent = '📝';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this note?') == true) {
            note.remove()
        }
    })

    // noteButtons.appendChild(editButton);
    // noteButtons.appendChild(deleteButton);

    noteTop.appendChild(noteTitle);
    noteTop.appendChild(deleteButton);

    const noteText = document.createElement('p');
    noteText.className = 'note-text';
    noteText.textContent = text;
    noteText.setAttribute('contenteditable', 'true')

    note.appendChild(noteTop);
    note.appendChild(noteText);

    const notesContainer = document.getElementById('notes-container');
    const lastElement = notesContainer.lastElementChild
    notesContainer.insertBefore(note, lastElement)
}

function saveNotes() {
    const notesContainer = document.getElementById('notes-container')
    let notesList = []

    for (let i = 0; i < notesContainer.children.length -1; i++) {

        const note = notesContainer.children[i]
        const noteTitle = note.firstElementChild.firstElementChild.textContent
        const noteText = note.lastElementChild.textContent

        notesList.push([noteTitle, noteText])
    }

    const jsonNotes = JSON.stringify(notesList)
    localStorage.setItem("notes", jsonNotes)
}

loadNotes()

document.getElementById('new').addEventListener('click', createNote)

document.getElementById('save').addEventListener('click', saveNotes)