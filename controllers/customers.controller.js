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

  async show(req, res) {
    const { id } = req.params;
    const [customer] = await this.customersService.findOne(id);

    res.render("customer", {
      customer,
    });
  }

  _new(req, res) {
    res.render("addCustomer");
  }

  async create(req, res) {
    const { first_name, last_name, email } = req.body;
    await this.customersService.create({
      first_name,
      last_name,
      email,
      created_at: new Date(),
    });
    res.redirect("/customers");
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
