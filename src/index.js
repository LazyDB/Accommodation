const express = require('express');
const bodyParser = require('body-parser');
const guestRoutes = require('./routes/guest.routes');
const bookingRoutes = require('./routes/roomBooking.routes');
const experienceRoutes = require('./routes/experience.routes');
const feedbackRoutes = require('./routes/feedback.routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/guests', guestRoutes);
app.use('/bookings', bookingRoutes);
app.use('/experiences', experienceRoutes);
app.use('/feedbacks', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
