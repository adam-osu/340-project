class PropertiesController {
  index(req, res) {
    res.render("properties");
  }

  show(req, res) {
    res.render("property", {
      propertyName: "433 Nowhere Road",
    });
  }

  _new(req, res) {
    res.render("addProperty");
  }

  create() {
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
