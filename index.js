let tasks = ['Сделать приложение js'];

let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', handleClickAdd);

function handleClickAdd() {
  addTask();
  render();
}

function addTask() {
  if (input.value.trim()) {
    tasks.push(input.value);
    input.value = '';
  }
}

function render() {
  const todoItems = document.getElementById('todo_items');

  todoItems.innerHTML = '';

  tasks.forEach((text, index) => {
    const li = document.createElement('li');

    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.setAttribute('id', index);

    closeButton.onclick = (event) => {
      const newTasks = tasks.filter((item, i) => {
        return Number(event.target.id) !== i;
      });
      tasks = newTasks;
      render();
    };

    li.innerText = text;
    li.appendChild(closeButton);

    todoItems.appendChild(li);
  });
}

render();
