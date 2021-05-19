const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class CustomerModel extends BaseModel {
  constructor() {
    super({ name: "customers" });
    autoBind(this);
  }

  findAll() {
    return super.findAll();
  }

  findOne(id) {
    return super.findOne(id);
  }

  create(customer) {
    return super.create(customer);
  }
}

module.exports = { Customer: new CustomerModel() };