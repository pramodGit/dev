-- USERS
CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 phone VARCHAR(20) UNIQUE,
 email VARCHAR(100),
 role ENUM('driver','passenger'),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- VEHICLES
CREATE TABLE vehicles (
 id INT AUTO_INCREMENT PRIMARY KEY,
 driver_id INT,
 model VARCHAR(100),
 number_plate VARCHAR(20),
 seats INT,
 FOREIGN KEY (driver_id) REFERENCES users(id)
);

-- RIDES
CREATE TABLE rides (
 id INT AUTO_INCREMENT PRIMARY KEY,
 driver_id INT,
 from_city VARCHAR(100),
 to_city VARCHAR(100),
 from_lat DOUBLE,
 from_lng DOUBLE,
 to_lat DOUBLE,
 to_lng DOUBLE,
 ride_date DATETIME,
 price INT,
 seats_available INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (driver_id) REFERENCES users(id)
);

-- BOOKINGS
CREATE TABLE bookings (
 id INT AUTO_INCREMENT PRIMARY KEY,
 ride_id INT,
 passenger_id INT,
 seats INT,
 status VARCHAR(20) DEFAULT 'confirmed',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (ride_id) REFERENCES rides(id),
 FOREIGN KEY (passenger_id) REFERENCES users(id)
);

-- RATINGS
CREATE TABLE ratings (
 id INT AUTO_INCREMENT PRIMARY KEY,
 ride_id INT,
 reviewer_id INT,
 rating INT,
 comment TEXT
);