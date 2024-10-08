const connection = require('../config/db.config');

// Get all bookings
const getAllBookings = (req, res) => {
    const sql = 'SELECT * FROM RoomBooking';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
};

// Add a new booking
const addBooking = (req, res) => {
    const { guestID, roomNumber, checkInDate, checkOutDate, price } = req.body;
    const sql = 'INSERT INTO RoomBooking (guestID, roomNumber, checkInDate, checkOutDate, price) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [guestID, roomNumber, checkInDate, checkOutDate, price], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ message: 'Booking added', bookingID: results.insertId });
    });
};

module.exports = {
    getAllBookings,
    addBooking,
};
