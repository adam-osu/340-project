const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class PropertyModel extends BaseModel {
  constructor() {
    super({ name: "properties" });
    autoBind(this);
  }

  findAll() {
    return super.findAll();
  }

  findOne(id) {
    return super.findOne(id);
  }

  create(property) {
    return super.create(property);
  }
}

module.exports = { Property: new PropertyModel() };
