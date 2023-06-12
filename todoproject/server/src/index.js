const fs = require('fs');
// requiring express
const express = require('express'); 
const app = express(); // creates an instance of the express application 
// used to define routes, handle http requests. and perform other server related tasks

// variable for server
const PORT = 3001

// using the get method to read the json file and then display it on the server
app.get('/', (req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({error: "Cannot get data from json"});
            return;
        }
// parse the json data
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    })
})

// code for url server will be on
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})

