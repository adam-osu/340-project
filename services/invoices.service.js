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

  async delete(id) {
    return await this.invoiceModel.delete(id);
  }

  async create(invoice) {
    return await this.invoiceModel.create(invoice);
  }
}

module.exports = { InvoicesService };
