function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      ${taskText}
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
  }
  
  function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.style.textDecoration = 'line-through';
    taskItem.style.opacity = '0.6';
  }
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  