function addNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title && content) {
        const noteContainer = document.getElementById('notes');
        
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        
        noteContainer.appendChild(note);

        // Limpa os campos de entrada
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
    } else {
        alert('Por favor, insira o título e o conteúdo da nota.');
    }
}

function filterNotes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const notes = document.getElementsByClassName('note');

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const title = note.querySelector('h3').innerText.toLowerCase();
        const content = note.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            note.style.display = '';
        } else {
            note.style.display = 'none';
        }
    }
}
