class CustomersService {
  constructor({ customerModel }) {
    this.customerModel = customerModel;
  }
  async findAll() {
    return await this.customerModel.findAll();
  }

  async findOne(id) {
    return await this.customerModel.findOne(id);
  }

  async delete(id) {
    return await this.customerModel.delete(id);
  }

  async create(customer) {
    return await this.customerModel.create(customer);
  }

  async update({ id, updates }) {
    return await this.customerModel.update({ id, updates });
  }
}

module.exports = { CustomersService };
