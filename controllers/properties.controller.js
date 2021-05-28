const { PropertiesService } = require("../services/properties.services");
const autoBind = require("auto-bind");

const { Property } = require("../models/property.model");
const { cleanPick } = require("../utilities/cleanPick");

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
    const { id } = req.params;
    const [property] = await this.properties.findOne(id);

    res.render("property", {
      property,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    await this.properties.delete(id);

    res.redirect("/properties");
  }

  _new(req, res) {
    res.render("addProperty");
  }

  async create(req, res) {
    const { building_name, address, rate, max_occupancy } = req.body;

    await this.properties.create({
      building_name,
      address,
      rate,
      max_occupancy,
      created_at: new Date(),
    });

    res.redirect("/properties");
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

  async update(req, res) {
    const { id } = req.params;

    const cleanedUpdates = cleanPick(req.body, [
      "building_name",
      "address",
      "rate",
      "max_occupancy",
    ]);

    await this.properties.update({
      id,
      updates: cleanedUpdates,
    });

    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { PropertiesController };
