const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const btn = document.createElement('button');
const fa = document.querySelector('.fas');

btn.classList.add('btn', 'btn-secondary');
btn.textContent = 'new note';
document.body.prepend(btn);

const textArea = document.createElement('textarea');
textArea.placeholder = 'type something...';
modal.appendChild(textArea);

const createNewNote = () => {
  modal.style.display = 'block';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
  textArea.value = '';
  textArea.focus();
};

const showModal = () => {
  modal.style.display = 'none';
  document.body.style.backgroundColor = '';
  showNote();
};

const showNote = () => {
  const note = document.createElement('div');
  note.classList.add('note');

  note.style = `background-color: #${Math.floor(
    Math.random() * 16777215
  ).toString(16)};transform: rotate(${
    Math.random() > 0.5 ? '-' : '+'
  }${Math.floor(Math.random() * 5)}deg) `;

  note.textContent = textArea.value;
  textArea.value = '';
  container.appendChild(note);

  note.addEventListener('dblclick', () => {
    note.remove();
  });
};

btn.addEventListener('click', createNewNote);

window.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    createNewNote();
  }
});

fa.addEventListener('click', () => {
  showModal();
});

textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    showModal();
  }
});
