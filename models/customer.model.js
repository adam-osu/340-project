const { BaseModel } = require("./base.model");
const { pool } = require("../db");
const autoBind = require("auto-bind");

const {
  searchCustomer
} = require("./queries/customers.queries");

class CustomerModel extends BaseModel {
  constructor() {
    super({ name: "customers" });
    autoBind(this);
  }

  searchCustomer({first_name, last_name}) {
    return new Promise((resolve, reject) => {
      this.pool.query(searchCustomer, [first_name, last_name], (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }
}

module.exports = { Customer: new CustomerModel() };
