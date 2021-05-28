class InvoicesService {
  constructor({ invoiceModel }) {
    this.invoiceModel = invoiceModel;
  }
  async findAll() {
    return await this.invoiceModel.findAll();
  }

  async findOne(id) {
    return await this.invoiceModel.findOne(id);
  }

  async create(invoice) {
    return await this.invoiceModel.create(invoice);
  }

  async update({ id, updates }) {
    return await this.invoiceModel.update({ id, updates });
  }
}

module.exports = { InvoicesService };
