const { InvoicesController } = require("../controllers/invoices.controller");

const invoicesController = new InvoicesController();

module.exports = (app) => {
  /**
   * GET /invoices
   * 
   * All invoices page
   */
  app.get("/invoices", invoicesController.index);

  /**
   * GET /invoices/:id
   * 
   * Single invoices page
   */
  app.get("/invoices/:id", invoicesController.show);

  /**
   * GET /invoices/edit/:id
   * 
   * Edit invoice page
   */
  app.get("/invoices/edit/:id", invoicesController.edit);
  
  /**
   * POST /invoices
   * 
   * Update invoices page
   */
  app.put("/invoices", invoicesController.update);
}