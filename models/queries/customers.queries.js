const searchCustomer = `
  SELECT * FROM customers WHERE first_name = ? OR last_name = ?
`;