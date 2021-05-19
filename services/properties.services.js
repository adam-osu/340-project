const { Property } = require("../models/property.model");

class PropertiesService {
  async findAll() {
    return await Property.findAll();
  }

  async findOne(id) {
    return await Property.findOne(id);
  }

  async create(property) {
    return await Property.create(property);
  }
}

module.exports = { PropertiesService };
