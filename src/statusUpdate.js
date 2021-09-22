export function statusUpdate(tasks) {
  document.querySelectorAll('.list input').forEach((input, index) => {
    input.addEventListener('change', (e) => {
      if(input.checked) {
        tasks[index].completed = true;
        e.target.parentElement.childNodes[3].style.textDecoration='line-through';
      }
      else {
        tasks[index].completed = false;
        e.target.parentElement.childNodes[3].style.textDecoration='none';
        
      }
      saveList(tasks);
    })
  });
}

function saveList(tasks) {
    localStorage.setItem('myList', JSON.stringify(tasks));
  }
