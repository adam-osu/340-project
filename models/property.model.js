const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class PropertyModel extends BaseModel {
  constructor() {
    super({ name: "properties" });
    autoBind(this);
  }
}

module.exports = { Property: new PropertyModel() };