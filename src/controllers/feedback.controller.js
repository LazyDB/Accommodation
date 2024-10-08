const connection = require('../config/db.config');

// Get all feedbacks
const getAllFeedbacks = (req, res) => {
    const sql = 'SELECT * FROM Feedback';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
};

// Add feedback
const addFeedback = (req, res) => {
    const { guestID, experienceID, review } = req.body;
    const sql = 'INSERT INTO Feedback (guestID, experienceID, review) VALUES (?, ?, ?)';
    connection.query(sql, [guestID, experienceID, review], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: 'Feedback added', feedbackID: results.insertId });
    });
};

module.exports = {
    getAllFeedbacks,
    addFeedback,
};
