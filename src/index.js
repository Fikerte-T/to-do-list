import './style.css';
import statusUpdate from './statusUpdate.js';

const tasks = [
  {
    description: 'complete to do list project',
    completed: false,
    index: 0,
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'make dinner',
    completed: false,
    index: 2,
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
                <label>${task.description}</label>
            </div>
            <i class="fas fa-ellipsis-v"></i>
        </div>  
        `;
    element.innerHTML = listItem;
  });
}

window.onload = makeList();
statusUpdate(tasks);
