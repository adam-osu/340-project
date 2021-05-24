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
}

module.exports = { CustomersService };
