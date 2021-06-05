const findAll = `
  SELECT b.*, p.building_name FROM bookings b
  JOIN properties p ON b.property_id = p.id
  ORDER BY created_at DESC;
`;

const findOne = `
  SELECT b.*, p.building_name FROM bookings b
  JOIN properties p ON b.property_id = p.id
  WHERE b.id = ?;
`;

const findBookingCustomers = `
  SELECT  c.id, c.first_name, c.last_name, c.email FROM bookings_customers bc
  JOIN customers c ON bc.customer_id = c.id WHERE bc.booking_id = ?;
`;

const findBookingProperty = `
  SELECT p.id, p.building_name, p.max_occupancy FROM bookings b
  JOIN properties p ON b.property_id = p.id WHERE b.id = ?
`;

const addCustomers = `
  INSERT INTO bookings_customers (customer_id, booking_id, created_at) VALUES ?;
`;

const removeCustomer = `
  DELETE FROM bookings_customers WHERE customer_id = ? AND booking_id = ?;
`;

module.exports = {
  findAll,
  findOne,
  findBookingCustomers,
  addCustomers,
  removeCustomer,
  findBookingProperty,
};
