class InvoicesController {
  index(req, res) {
    res.render("invoices");
  }

  show(req, res) {
    res.render("invoice", {
      invoiceId: 1234,
    });
  }
  
  create(req, res) {
    res.status(200).send(req.body);
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
    res.status(201).send({message: 'Updated!'});
  }
}

module.exports = { InvoicesController };