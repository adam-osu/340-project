class InvoicesController {
  index(req, res) {
    res.render("invoices");
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
    res.status(201).send({message: 'Updated!'});
  }
}

module.exports = { InvoicesController };