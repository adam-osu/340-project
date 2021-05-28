const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class CustomerModel extends BaseModel {
  constructor() {
    super({ name: "customers" });
    autoBind(this);
  }
}

module.exports = { Customer: new CustomerModel() };
