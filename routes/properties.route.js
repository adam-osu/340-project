const {
  PropertiesController,
} = require("../controllers/properties.controller");

const propertiesController = new PropertiesController();

module.exports = (app) => {
  /**
   * GET /properties
   *
   * All properties page
   */
  app.get("/properties", propertiesController.index);

  /**
   * GET /properties/new
   *
   * New property page
   */
  app.get("/properties/new", propertiesController._new);

  /**
   * GET /properties/:id
   *
   * Single property page
   */
  app.get("/properties/:id", propertiesController.show);

  /**
   * POST /properties
   *
   * Create new property
   */
  app.post("/properties", propertiesController.create);

  /**
   * GET /properties/edit/:id
   *
   * Edit properties page
   */
  app.get("/properties/edit/:id", propertiesController.edit);

  /**
   * PUT /properties/:id
   *
   * Update property
   */
  app.put("/properties/:id");
};
