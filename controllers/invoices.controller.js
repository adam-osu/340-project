const { InvoicesService } = require("../services/invoices.service");
const autoBind = require("auto-bind");

const { Invoice } = require("../models/invoice.model");
const invoiceModel = require("../models/invoice.model");

class InvoicesController {
  constructor() {
    this.invoicesService = new InvoicesService({ invoiceModel: Invoice });
    autoBind(this);
  }

  async index(req, res) {
    const invoices = await this.invoicesService.findAll();
    res.render("invoices", { invoices });
  }

  show(req, res) {
    res.render("invoice", {
      invoiceId: 1234,
    });
  }

  edit(req, res) {
    res.render("editInvoice", {
      // test data
      invoiceId: 1234,
      totalDue: 3000,
      amountPaid: 1500,
    });
  }

  update(req, res) {
    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { InvoicesController };
