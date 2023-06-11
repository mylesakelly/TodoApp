# TodoApp


Project: Task Tracker App

Project Description: The purpose of this project is to create a Task Tracker App using HTML, CSS, Javascript, and Node.js. This project includes the functionality to allow the user to delete, edit, save, and add to their task tracker. Additionally, the tasks should be stored on a local machine server when added and deleted from the server when the user deletes them. This App can also be used on tablet or mobile devices. It is also deployed on AWS.

Github Link: https://github.com/mylesakelly/TodoApp.git

Installation: First, the package.json was installed by using the command npm init -y.For the backend portion of this project, Node.js was used. I installed Node.js by using the command npm i node in my terminal. I also installed express.js by using the command npm i express in my terminal. 



Backend Struggles and Solutions

Issue 1: Received error that middleware was needed for the router


Solution 1: When setting up my server, I required router to be included in my code. The router was used to GET the items variable that held my json objects, which were my tasks in my items.js file. When I would try to run the server my json objects would not appear. To solve this issue I had to use the middleware router.use('/items', items); so that I could connect to the /items route path.

Issue 2: Getting my JSON objects to appear on the HTML page

Solution 2:

Issue 3: 

Solution 3: 
