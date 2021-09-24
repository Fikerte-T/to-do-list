class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let tasks = [];
const element = document.querySelector('.wrapper');
const input = document.getElementById('input');
const complete = document.querySelector('.complete');

export function saveList(task) {
  localStorage.setItem('myList', JSON.stringify(task));
  window.location.reload();
}

export function makeList() {
  let listItem = '';
  tasks.forEach((task, index) => {
    task.index = index + 1;
    listItem += `<div class="list-container">
      <div class="list">
        <input class="check-box" type="checkbox" name="" ${task.completed ? 'checked' : ''}>
        <input type="text" class ="description ${task.completed ? 'line-through' : ''}" value="${task.description}">
      </div>
      <i class="fas fa-ellipsis-v"></i>
      </div>`;
    element.innerHTML = listItem;
  });
}

export function checkStorage() {
  if (localStorage.getItem('myList')) {
    tasks = JSON.parse(localStorage.getItem('myList') || '[]');
    makeList();
  }
}

export function addNewTask() {
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
      const newTask = new Task(input.value, false, tasks.length + 1);
      tasks.push(newTask);
      saveList(tasks);
      input.value = '';
    }
  });
}

function editAndSave(element) {
  document.querySelectorAll('.description').forEach((selectedInput, inputIndex) => {
    selectedInput.addEventListener('keyup', (e) => {
      tasks.forEach((task) => {
        if (e.key === 'Enter' && task.index === inputIndex + 1) {
          task.description = selectedInput.value;
          element.classList.remove('fa-trash-alt');
          element.classList.add('fa-ellipsis-v');
          element.parentElement.style.background = '#fff';
          element.parentElement.children[0].children[1].style.background = 'none';
          saveList(tasks);
        }
      });
    });
  });
}

export function removeTask(i) {
  tasks = tasks.filter((task) => task.index !== i + 1);
  saveList(tasks);
}

export function editTask() {
  document.querySelectorAll('.fas').forEach((element, i) => {
    element.addEventListener('click', (event) => {
      if (element.className === 'fas fa-ellipsis-v') {
        element.classList.remove('fa-ellipsis-v');
        element.classList.add('fa-trash-alt');
        event.target.parentElement.style.background = '#fdf698';
        event.target.parentElement.children[0].children[1].style.background = '#fdf698';
        editAndSave(element);
      } else if (element.className === 'fas fa-trash-alt') {
        removeTask(i);
      }
    });
  });
}

export function clearCompleted() {
  complete.addEventListener('click', () => {
    tasks = tasks.filter((task) => task.completed !== true);
    saveList(tasks);
  });
}
clearCompleted();
export function statusUpdate() {
  document.querySelectorAll('.check-box').forEach((input, index) => {
    input.addEventListener('change', (e) => {
      if (input.checked) {
        tasks[index].completed = true;
        e.target.parentElement.childNodes[3].style.textDecoration = 'line-through';
        e.target.parentElement.parentElement.children[1].style.display = 'none';
        saveList(tasks);
      } else {
        tasks[index].completed = false;
        e.target.parentElement.childNodes[3].style.textDecoration = 'none';
        e.target.parentElement.parentElement.children[1].style.display = 'block';
        saveList(tasks);
      }
    });
  });
}
