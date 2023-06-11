const express = require('express');

const router = express.Router();

const items = [
    {id: "1", "name": "Buy groceries", completed: false},
    {id: "2", "name": "work on project", completed: false},
    {id: "3", "name": "go to the gym", completed: false}
]


// middleware for router
router.get('/', (req, res) => {
    res.json({
        items,
    });
});

module.exports = router;




// const express = require('express');
// const router = express.Router();

// let items = [
//     {id: "1", name: "Buy groceries", completed: false},
//     {id: "2", name: "Work on project", completed: false},
//     {id: "3", name: "Go to the gym", completed: false}
// ];

// // Middleware for router
// router.get('/', (req, res) => {
//     res.json({
//         items,
//     });
// });

// router.post('/', (req, res) => {
//     const newItem = req.body; // Assuming the new task is sent in the request body
//     items.push(newItem);
//     res.status(201).json({
//         message: "Task added successfully",
//         item: newItem,
//     });
// });

// module.exports = router;

























// const express = require('express');
// const fs = require('fs');

// const router = express.Router();

// const jsonFilePath = 'items.json';

// let items = [];

// // Read items from the JSON file if it exists
// if (fs.existsSync(jsonFilePath)) {
//   const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
//   items = JSON.parse(jsonData);
// }

// // Middleware for router
// router.get('/', (req, res) => {
//   res.json({ items });
// });

// // Middleware to add a new item
// router.post('/', (req, res) => {
//   const newItem = req.body;
//   items.push(newItem);

//   // Save the updated items to the JSON file
//   const jsonItems = JSON.stringify(items, null, 2);
//   fs.writeFileSync(jsonFilePath, jsonItems);

//   res.json({ message: 'Item added successfully' });
// });

// module.exports = router;
