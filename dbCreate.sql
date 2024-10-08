-- Database creation
CREATE DATABASE IF NOT EXISTS cultural_program;
USE cultural_program;

-- Table for Guests
CREATE TABLE IF NOT EXISTS Guests (
    guestID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    phoneNumber VARCHAR(15),
    loyaltyPoints INT DEFAULT 0
);

-- Table for Room Bookings
CREATE TABLE IF NOT EXISTS RoomBooking (
    bookingID INT PRIMARY KEY AUTO_INCREMENT,
    guestID INT,
    roomNumber INT,
    checkInDate DATE,
    checkOutDate DATE,
    price DECIMAL(10, 2),
    FOREIGN KEY (guestID) REFERENCES Guests(guestID)
);

-- Table for Cultural Experiences
CREATE TABLE IF NOT EXISTS CulturalExperience (
    experienceID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    description TEXT,
    availability VARCHAR(100),
    country VARCHAR(100)
);

-- Table for Feedback
CREATE TABLE IF NOT EXISTS Feedback (
    feedbackID INT PRIMARY KEY AUTO_INCREMENT,
    guestID INT,
    experienceID INT,
    review TEXT,
    FOREIGN KEY (guestID) REFERENCES Guests(guestID),
    FOREIGN KEY (experienceID) REFERENCES CulturalExperience(experienceID)
);
