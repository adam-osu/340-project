const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class InvoiceModel extends BaseModel {
  constructor() {
    super({ name: "invoices" });
    autoBind(this);
  }

  findAll() {
    return super.findAll();
  }

  findOne(id) {
    return super.findOne(id);
  }

  create(invoice) {
    return super.create(invoice);
  }

  delete(id) {
    return super.delete(id);
  }
}

module.exports = { Invoice: new InvoiceModel() };