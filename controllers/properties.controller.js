const { PropertiesService } = require("../services/properties.services");
const autoBind = require("auto-bind");

const { Property } = require("../models/property.model");

class PropertiesController {
  constructor() {
    this.properties = new PropertiesService({ propertyModel: Property });
    autoBind(this);
  }

  async index(req, res) {
    const properties = await this.properties.findAll();
    res.render("properties", { properties });
  }

  async show(req, res) {
    // const data = await this.properties.findOne(1);
    // return res.send(data);

    res.render("property", {
      propertyName: "433 Nowhere Road",
    });
  }

  _new(req, res) {
    res.render("addProperty");
  }

  async create(req, res) {
    // const data = await this.properties.create({
    //   building_name: "Node",
    //   address: "JavaScript",
    //   rate: 400,
    //   max_occupancy: 16,
    //   created_at: new Date(),
    // });
    // return res.send(data);

    res.status(200).send(req.body);
  }

  edit(req, res) {
    res.render("editProperty", {
      // test data
      propertyName: "Test",
      address: "123 Test Road",
      rate: 40,
      maxOccupancy: 12,
    });
  }

  update(req, res) {
    // update
    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { PropertiesController };
