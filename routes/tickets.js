const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/tickets/:id/
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;