-- Drop tables

DROP TABLE IF EXISTS bookings_customers;
DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS customers;

-- Create tables

CREATE TABLE properties (
    id INT(11) AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    building_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    rate DECIMAL(13,2) NOT NULL,
    max_occupancy INT(2) NOT NULL,
    created_at DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE bookings (
    id INT(11) NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    property_id INT NOT NULL,
    CONSTRAINT `fk_property_id` FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE RESTRICT,
    created_at DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE customers (
    id INT(11) AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE bookings_customers  (
  customer_id int(11) NOT NULL,
  booking_id int(11) NOT NULL,
  created_at datetime NOT NULL,
  PRIMARY KEY (customer_id, booking_id) USING BTREE,
  CONSTRAINT bookings_customers_ibfk_1 FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT bookings_customers_ibfk_2 FOREIGN KEY (booking_id) REFERENCES bookings (id) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB ;

CREATE TABLE invoices (
    id INT(11) AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    booking_id INT(11) NOT NULL,
    total_due DECIMAL(13,2) NOT NULL,
    amount_paid DECIMAL(13,2) NOT NULL,
    created_at DATETIME NOT NULL,

    CONSTRAINT `fk_booking_id` FOREIGN KEY (booking_id) REFERENCES bookings (id)
) ENGINE=InnoDB;

-- Insert data 

INSERT INTO properties
SET building_name = 'WonderWave',
    address = '123 Go Fishing Way',
    rate = 150,
    max_occupancy = 5,
    created_at = '2020-10-23';

INSERT INTO properties
SET building_name = 'IceWorm',
    address = '123 Raftin St',
    rate = 200,
    max_occupancy = 4,
    created_at = '2021-1-13';

INSERT INTO properties
SET building_name = 'Oxbow',
    address = '123 Flights Ave',
    rate = 300,
    max_occupancy = 8,
    created_at = '2021-2-2';

INSERT INTO bookings 
SET start_date = '2020-11-20 12:00:00.000', 
    end_date = '2020-11-27 12:00:00.000',
    property_id = 1,
    created_at = '2020-11-15 12:00:00.000';

INSERT INTO customers
SET first_name = 'John',
    last_name = 'Doe',
    email = 'jdoe@email.com',
    created_at = '2020-11-15 11:00:00.000';

INSERT INTO customers
SET first_name = 'Jane',
    last_name = 'Doe',
    email = 'jane@email.com',
    created_at = '2020-11-15 11:15:00.000';

INSERT INTO bookings_customers
SET customer_id = 1,
    booking_id = 1,
    created_at = '2020-11-15 12:00:00.200';

INSERT INTO bookings_customers
SET customer_id = 2,
    booking_id = 1,
    created_at = '2020-11-15 12:00:00.350';

INSERT INTO invoices
SET booking_id = 1,
    total_due = 1050,
    amount_paid = 600,
    created_at = '2021-3-1';