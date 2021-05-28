const { CustomersService } = require("../services/customers.service");
const autoBind = require("auto-bind");

const { Customer } = require("../models/customer.model");
const { cleanPick } = require("../utilities/cleanPick");

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

  async delete(req, res) {
    const { id } = req.params;
    await this.customersService.delete(id);

    res.redirect("/customers");
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

  async edit(req, res) {
    const { id } = req.params;

    const [customer] = await this.customersService.findOne(id);

    res.render("editCustomer", { customer });
  }

  async update(req, res) {
    const { id } = req.params;
    const cleanedCustomer = cleanPick(req.body, [
      "first_name",
      "last_name",
      "email",
    ]);

    await this.customersService.update({ id, updates: cleanedCustomer });

    res.redirect('/customers');
  }
}

module.exports = { CustomersController };
