const express = require('express');
const api = require('./api'); // server is crashing when this is added
const app = express();
const PORT = 3001

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Scylla"
    })
})

app.use('/api', api)

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})






// const api = require('./api');
// const app = express();
// const PORT = 3001;

// app.get('/', (req, res) => {
//     res.json ({
//         message: "welcome to scylla"
//     })
// })

// app.use('/api', api)

// app.listen(PORT, () =>{
//     console.log(`listening to http://localhost:${PORT}`) 
// })