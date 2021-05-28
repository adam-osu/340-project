const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class InvoiceModel extends BaseModel {
  constructor() {
    super({ name: "invoices" });
    autoBind(this);
  }
}

module.exports = { Invoice: new InvoiceModel() };