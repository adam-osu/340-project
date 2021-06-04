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

  searchCustomer() {
    return new Promise((resolve, reject) => {
      this.pool.query(findOne, (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }
}

module.exports = { Customer: new CustomerModel() };
