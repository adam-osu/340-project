const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class PropertyModel extends BaseModel {
  constructor() {
    super({ name: "properties" });
    autoBind(this);
  }

  searchProperty({building_name}) {
    return new Promise((resolve, reject) => {
      this.pool.query(searchProperty, [building_name], (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }
}

module.exports = { Property: new PropertyModel() };