const express = require('express');
// const bodyParser = require('body-parser');
const api = require('./api'); // server is crashing when this is added
const app = express();
const PORT = 3001
// const itemsRouter = require('./items');

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Scylla"
    })
})


// Middleware setup
// app.use(bodyParser.json()); // Parse JSON bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// app.post('/example', (req, res) => {
//     console.log(req.body);
//     res.send('Received the request body');
//   });

app.use('/api', api)

// app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})
