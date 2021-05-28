const { InvoicesService } = require("../services/invoices.service");
const autoBind = require("auto-bind");

const { Invoice } = require("../models/invoice.model");
const { cleanPick } = require("../utilities/cleanPick");

class InvoicesController {
  constructor() {
    this.invoicesService = new InvoicesService({ invoiceModel: Invoice });
    autoBind(this);
  }

  async index(req, res) {
    const invoices = await this.invoicesService.findAll();
    res.render("invoices", { invoices });
  }

  async show(req, res) {
    const { id } = req.params;
    const [invoice] = await this.invoicesService.findOne(id);
    res.render("invoice", {
      invoice,
    });
  }

  async edit(req, res) {
    const { id } = req.params;
    const [invoice] = await this.invoicesService.findOne(id);

    res.render("editInvoice", { invoice });
  }

  async update(req, res) {
    const { id } = req.params;
    const cleanedUpdates = cleanPick(req.body, ["total_due", "amount_paid"]);

    await this.invoicesService.update({ id, updates: cleanedUpdates });

    res.redirect("/invoices");
  }
}

module.exports = { InvoicesController };
