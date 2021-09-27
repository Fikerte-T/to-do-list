import './style.css';
import {
  editTask, checkStorage, statusUpdate, addNewTask,
} from './addRemoveItems.js';

// window.onload = () => {
  addNewTask();
  checkStorage();
  editTask();
  statusUpdate();
// };
