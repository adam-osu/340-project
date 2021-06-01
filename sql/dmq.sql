-- Properties

SELECT * FROM properties ORDER BY created_at DESC;

INSERT INTO properties
SET 
    building_name = :building_name_input,
    address = :address_input,
    rate = :rate_input,
    max_occupancy = :max_occupancy_input,
    created_at = :get_current_time;

UPDATE properties
SET building_name = :building_name_input,
    address = :address_input,
    rate = :rate_input,
    max_occupancy = :max_occupancy_input
WHERE id = :id_of_clicked_entry;

DELETE FROM properties
WHERE id = :id_of_clicked_entry;

-- Bookings

SELECT b.*, p.building_name FROM bookings b
  JOIN properties p ON b.property_id = p.id
  ORDER BY created_at DESC;

-- Selects a single booking and joins on property to get property name
SELECT b.*, p.building_name FROM bookings b
JOIN properties p ON b.property_id = p.id
WHERE b.id = :id_of_clicked_entry;

INSERT INTO bookings 
SET start_date = :start_date_calendar_input, 
    end_date = :end_date_calendar_input,
    property_id = :property_id_input,
    created_at = :get_current_time;

UPDATE bookings
SET start_date = :start_date_calendar_input,
    end_date = :end_date_calendar_input,
    property_id = :property_id_input,
WHERE id = :id_of_clicked_entry;

DELETE FROM bookings
WHERE id = :id_of_clicked_entry;

-- Customers

SELECT * FROM customers ORDER BY created_at DESC;

INSERT INTO customers
SET first_name = :first_name_input,
    last_name = :last_name_input,
    email = :email_input,
    created_at = :get_current_time;

UPDATE customers
SET first_name = :first_name_input,
    last_name = :last_name_input,
    email = :email_input,
WHERE id = :id_of_clicked_entry;

DELETE FROM customers
WHERE id = :id_of_clicked_entry;

-- Bookings_Customers (Join Table)

SELECT c.id, c.first_name, c.last_name FROM bookings_customers bc
INNER JOIN customers c ON bc.customer_id = c.id
WHERE bc.booking_id = :booking_id_of_clicked_entry;

-- Selects customers for a booking
SELECT  c.id, c.first_name, c.last_name FROM bookings_customers bc
JOIN customers c ON bc.customer_id = c.id WHERE bc.booking_id = ?;

INSERT INTO bookings_customers
SET booking_id = :booking_id_input,
    customer_id = :customer_id_input;

DELETE FROM bookings_customers
WHERE customer_id = :customer_id_of_clicked_entry AND bookings_id = :booking_id_of_clicked_entry;

-- Invoices

SELECT * FROM invoices ORDER BY created_at DESC;

INSERT INTO invoices
SET booking_id = :booking_id_from_new_booking,
    total_due = (:property_rate_from_booking_id * days_booked),
    amount_paid = :default_amount_paid,
    created_at = :get_current_time
);

UPDATE invoices
SET total_due = :property_rate_input,
    amount_paid = :amount_paid_input;

DELETE FROM invoices
WHERE id = :id_of_clicked_entry;