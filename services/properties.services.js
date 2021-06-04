class PropertiesService {
  constructor({ propertyModel }) {
    this.propertyModel = propertyModel;
  }

  async searchProperty(building_name) {
    return await this.customerModel.searchProperty(building_name);
  }
  
  async findAll() {
    return await this.propertyModel.findAll();
  }

  async findOne(id) {
    return await this.propertyModel.findOne(id);
  }

  async delete(id) {
    return await this.propertyModel.delete(id);
  }

  async create(property) {
    return await this.propertyModel.create(property);
  }

  async update({id, updates}) {
    return await this.propertyModel.update({id, updates})
  }
}

module.exports = { PropertiesService };
