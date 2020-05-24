const express = require('express');
const router = express.Router(); 

const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);
// DELETE /flights/:id/destination/:id
router.delete('/flights/:id/destinations/:id', destinationsCtrl.delete)

module.exports = router;