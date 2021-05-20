const { CustomersService } = require("../services/customers.service");
const autoBind = require("auto-bind");

const { Customer } = require("../models/customer.model");

class CustomersController {
  constructor() {
    this.customersService = new CustomersService({ customerModel: Customer });
    autoBind(this);
  }

  async index(req, res) {
    const customers = await this.customersService.findAll();
    res.render("customers", { customers });
  }

  show(req, res) {
    res.render("customer", {
      first_name: "John",
      last_name: "Doe",
    });
  }

  _new(req, res) {
    res.render("addCustomer");
  }

  create(req, res) {
    res.status(200).send(req.body);
  }

  edit(req, res) {
    res.render("editCustomer", {
      // test data
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@jd.com",
    });
  }

  update(req, res) {
    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { CustomersController };
