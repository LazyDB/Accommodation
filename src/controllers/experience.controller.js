const connection = require('../config/db.config');

// Get all experiences
const getAllExperiences = (req, res) => {
    const sql = 'SELECT * FROM CulturalExperience';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
};

// Add a new experience
const addExperience = (req, res) => {
    const { name, description, availability, country } = req.body;
    const sql = 'INSERT INTO CulturalExperience (name, description, availability, country) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, description, availability, country], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: 'Experience added', experienceID: results.insertId });
    });
};

module.exports = {
    getAllExperiences,
    addExperience,
};
