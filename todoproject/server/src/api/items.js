const express = require('express');

const router = express.Router();

const items = [
    {id: "1", "name": "Buy groceries", completed: false}
]


// middleware for router
router.get('/', (req, res) => {
    res.json({
        items,
    });
});

module.exports = router;