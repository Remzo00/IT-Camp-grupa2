const form = document.getElementById('add-task-form');
const input = document.getElementById('new-task');
const list = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTask(text);
    input.value = '';
  }
});

const addTask = (text) => {
  const task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = `
    <a href="#" class="text">${text}</a>
    <button class="delete-button">Delete</button>
  `;
  const deleteButton = task.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    task.remove();
  });
  list.appendChild(task);
}