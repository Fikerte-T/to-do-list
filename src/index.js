import './style.css';

const tasks = [
  {
    description: 'complete to do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'make dinner',
    completed: false,
    index: 3,
  },

];

const element = document.querySelector('.wrapper');
let listItem = '';
function makeList() {
  tasks.forEach((task) => {
    listItem += `
        <div class="list-container">
            <div class="list">
                <input type="checkbox" name="">
                <span>${task.description}</span>
            </div>
            <i class="fas fa-ellipsis-v"></i>
        </div>
        
        `;
    element.innerHTML = listItem;
  });
}
window.onload = makeList();
