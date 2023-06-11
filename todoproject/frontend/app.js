window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert('Please fill out the task');
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });        
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch JSON data from the server
//     fetch('../server/src/api/data.json')
//         .then(response => response.json())
//         .then(jsonData => {
//             // Get the tasks container
//             const tasksContainer = document.getElementById('tasks');

//             // Loop through the JSON data and create HTML elements
//             jsonData.forEach(task => {
//                 // Create a task element
//                 const taskElement = document.createElement('div');
//                 taskElement.textContent = task.name;

//                 // Append the task element to the tasks container
//                 tasksContainer.appendChild(taskElement);
//             });
//         })
//         .catch(err => console.error(err));
// });


document.addEventListener('DOMContentLoaded', () => {
    // Fetch JSON data from the server
    fetch('../server/src/api/data.json') 
      .then(response => response.json())
      .then(jsonData => {
        // Get the tasks container
        const tasksContainer = document.getElementById('tasks');
  
        // Loop through the JSON data and create HTML elements
        jsonData.items.forEach(task => {
          // Create a task element
          const taskElement = document.createElement('div');
          taskElement.classList.add('task');
  
          const taskContentElement = document.createElement('div');
          taskContentElement.classList.add('content');
  
          taskElement.appendChild(taskContentElement);
  
          const taskInputEl = document.createElement('input');
          taskInputEl.classList.add('text');
          taskInputEl.type = 'text';
          taskInputEl.value = task.name;
          taskInputEl.setAttribute('readonly', 'readonly');
  
          taskContentElement.appendChild(taskInputEl);
  
          const taskActionsElement = document.createElement('div');
          taskActionsElement.classList.add('actions');
  
          const taskEditElement = document.createElement('button');
          taskEditElement.classList.add('edit');
          taskEditElement.innerText = 'Edit';
  
          const taskDeleteElement = document.createElement('button');
          taskDeleteElement.classList.add('delete');
          taskDeleteElement.innerText = 'Delete';
  
          taskActionsElement.appendChild(taskEditElement);
          taskActionsElement.appendChild(taskDeleteElement);
  
          taskElement.appendChild(taskActionsElement);
  
          tasksContainer.appendChild(taskElement);
  
          taskEditElement.addEventListener('click', (e) => {
            if (taskEditElement.innerText.toLowerCase() == 'edit') {
              taskEditElement.innerText = 'Save';
              taskInputEl.removeAttribute('readonly');
              taskInputEl.focus();
            } else {
              taskEditElement.innerText = 'Edit';
              taskInputEl.setAttribute('readonly', 'readonly');
            }
          });
  
          taskDeleteElement.addEventListener('click', () => {
            tasksContainer.removeChild(taskElement);
          });
        });
      })
      .catch(err => console.error(err));
  });
