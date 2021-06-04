const searchProperty = `
  SELECT * FROM properties WHERE building_name = ?
`;

module.exports = { searchProperty };