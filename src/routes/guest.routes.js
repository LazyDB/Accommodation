const express = require('express');
const guestController = require('../controllers/guest.controller');
const router = express.Router();

router.get('/', guestController.getAllGuests);
router.post('/', guestController.addGuest);

module.exports = router;
