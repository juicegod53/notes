function createNote() {
    const note = document.createElement('div');
    note.className = 'note';

    const noteTop = document.createElement('div');
    noteTop.className = 'note-top';

    const noteTitle = document.createElement('h2');
    noteTitle.className = 'note-title';
    noteTitle.textContent = 'Title here';

    const noteButtons = document.createElement('div');
    noteButtons.className = 'note-buttons';

    const editButton = document.createElement('button');
    editButton.textContent = '📝';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this note?") == true) {
            note.remove()
        }
    })

    noteButtons.appendChild(editButton);
    noteButtons.appendChild(deleteButton);

    noteTop.appendChild(noteTitle);
    noteTop.appendChild(noteButtons);

    const noteText = document.createElement('p');
    noteText.className = 'note-text';
    noteText.textContent = 'Text here';

    note.appendChild(noteTop);
    note.appendChild(noteText);

    const notesContainer = document.getElementById('notes-container');
    const lastElement = notesContainer.lastElementChild
    notesContainer.insertBefore(note, lastElement)
}

document.getElementById('new').addEventListener("click", createNote)

