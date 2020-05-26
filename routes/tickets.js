const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/tickets/:id/new', ticketsCtrl.new);

module.exports = router;