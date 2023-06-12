// event listener created to trigger when the window has loaded all html css and javascript
window.addEventListener('load', () => {
    // created variables for the elements located on the html page
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");
//   event listener created for the form variable which is the text input 
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const task = input.value;
      //  if the user tries to click the "add task" button without adding any characters to the text input field
    // they will be alered to fill out the task
      if (!task) {
        alert('Please fill out the task');
        return;
      }

//   taskEl div element is created and styling from css is added to it
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
  
// taskContentEl div element is created and styling from css is added to it
      const taskContentEl = document.createElement("div");
      taskContentEl.classList.add("content");

// taskContentEl is added as a child element under taskEl
      taskEl.appendChild(taskContentEl);
  
// taskInputEl element is created and styling is added as well
// the input type is set to text and the value is set to task   
      const taskInputEl = document.createElement("input");
      taskInputEl.classList.add("text");
      taskInputEl.type = "text";
      taskInputEl.value = task;
      taskInputEl.setAttribute("readonly", "readonly");

// taskInputEl is added as a child element under TaskContentEl
      taskContentEl.appendChild(taskInputEl);

    //   created element for actions buttons
      const taskActionsEl = document.createElement('div');
      taskActionsEl.classList.add('actions');
  
// created element for edit button
      const taskEditEl = document.createElement('button');
      taskEditEl.classList.add('edit');
      taskEditEl.innerText = 'Edit';
  
// element created for delete button
      const taskDeleteEl = document.createElement('button');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerText = 'Delete';
  
// edit and delete button are added as child elements under TaskActionsEl
      taskActionsEl.appendChild(taskEditEl);
      taskActionsEl.appendChild(taskDeleteEl);
  
      taskEl.appendChild(taskActionsEl);
  
      listEl.appendChild(taskEl);
// input value for the text field is set to an empty string so user can write whatever they want
      input.value = '';
  
// click event listeners for the save and edit buttons 
      taskEditEl.addEventListener('click', (e) => {
        if (taskEditEl.innerText.toLowerCase() === "edit") {
          taskEditEl.innerText = "Save";
          taskInputEl.removeAttribute("readonly");
          taskInputEl.focus();
        } else {
          taskEditEl.innerText = "Edit";
          taskInputEl.setAttribute("readonly", "readonly");
        }
      });
//   click event listeners for the delete button
      taskDeleteEl.addEventListener('click', () => {
        listEl.removeChild(taskEl);
        deleteTaskFromJson(task);
      });
    });
  });
  
// event listener for when the web page is loaded trigger for the json data to be fetched from the server and displayed on the page
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch JSON data from the server
    fetch('../server/src/data.json')
      .then(response => response.json())
      .then(jsonData => {
        // Get the tasks container
        const tasksContainer = document.getElementById('tasks');
  
        // Loop through the JSON data and create HTML elements
        jsonData.items.forEach(task => {
          createTaskElement(task, tasksContainer);
        });
      })
      
    //   console.log errors if fail
      .catch(err => console.error(err));
  });

//   attempting to use the PUT method to save any updates entered on the task app to the json file
// code did not work
  
  function createTaskElement(task, container) {
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
  
    container.appendChild(taskElement);
  
    taskEditElement.addEventListener('click', (e) => {
      if (taskEditElement.innerText.toLowerCase() === 'edit') {
        taskEditElement.innerText = 'Save';
        taskInputEl.removeAttribute('readonly');
        taskInputEl.focus();
      } else {
        taskEditElement.innerText = 'Edit';
        taskInputEl.setAttribute('readonly', 'readonly');
      }
    });
  
    taskDeleteElement.addEventListener('click', () => {
      container.removeChild(taskElement);
      deleteTaskFromJson(task);
    });
  }
  
  function deleteTaskFromJson(task) {
    fetch('../server/src/data.json')
      .then(response => response.json())
      .then(jsonData => {
        const updatedItems = jsonData.items.filter(item => item.name !== task.name);
        const updatedData = { items: updatedItems };
  
        return fetch('../server/src/api/data.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        });
      })
      .catch(err => console.error(err));
  }
  