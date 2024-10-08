const express = require('express');
const experienceController = require('../controllers/experience.controller');
const router = express.Router();

router.get('/', experienceController.getAllExperiences);
router.post('/', experienceController.addExperience);

module.exports = router;
