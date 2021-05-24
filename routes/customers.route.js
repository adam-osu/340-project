const { CustomersController } = require("../controllers/customers.controller");

const customersController = new CustomersController();

module.exports = (app) => {
  /**
   * GET /customers
   *
   * All customers page
   */
  app.get("/customers", customersController.index);

  /**
   * GET /customers/new
   *
   * New customer page
   */
  app.get("/customers/new", customersController._new);

  /**
   * GET /customers/:id
   *
   * Single customers page
   */
  app.get("/customers/:id", customersController.show);

  /**
   * POST /customers
   *
   * Create new customer
   */
  app.post("/customers", customersController.create);

  /**
   * GET /customers/edit/:id
   *
   * Edit customer page
   */
  app.get("/customers/edit/:id", customersController.edit);

  /**
   * DELETE /customers/delete/:id
   *
   * Delete customer page
   */
  app.delete("/customers/delete/:id", customersController.delete);

  /**
   * POST /customers
   *
   * Update customer
   */
  app.put("/customers", customersController.update);
};
