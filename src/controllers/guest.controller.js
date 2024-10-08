const connection = require('../config/db.config');

// Get all guests
const getAllGuests = (req, res) => {
    const sql = 'SELECT * FROM Guests';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
};

// Add a new guest
const addGuest = (req, res) => {
    const { name, phoneNumber } = req.body;
    const sql = 'INSERT INTO Guests (name, phoneNumber) VALUES (?, ?)';
    connection.query(sql, [name, phoneNumber], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: 'Guest added', guestID: results.insertId });
    });
};

module.exports = {
    getAllGuests,
    addGuest,
};
