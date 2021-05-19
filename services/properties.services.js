class PropertiesService {
  constructor({ propertyModel }) {
    this.propertyModel = propertyModel;
  }
  async findAll() {
    return await this.propertyModel.findAll();
  }

  async findOne(id) {
    return await this.propertyModel.findOne(id);
  }

  async create(property) {
    return await this.propertyModel.create(property);
  }
}

module.exports = { PropertiesService };
