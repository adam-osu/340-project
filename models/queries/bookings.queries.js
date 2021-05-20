const findAll = `
  SELECT b.*, p.building_name FROM bookings b
  JOIN properties p ON b.property_id = p.id
  ORDER BY created_at DESC;
`;

module.exports = { findAll };
