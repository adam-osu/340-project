const { BookingsController } = require("../controllers/bookings.controller");

const bookingsController = new BookingsController();

module.exports = (app) => {
  /**
   * GET /bookings
   *
   * All bookings page
   */
  app.get("/bookings", bookingsController.index);

  /**
   * GET /bookings/new
   *
   * New booking page
   */
  app.get("/bookings/new", bookingsController._new);

  /**
   * GET /bookings/:id
   *
   * Single booking page
   */
  app.get("/bookings/:id", bookingsController.show);

  /**
   * POST /bookings
   *
   * Create new booking
   */
  app.post("/bookings", bookingsController.create);

  /**
   * GET /bookings/edit/:id
   *
   * Edit booking page
   */
  app.get("/bookings/edit/:id", bookingsController.edit);

  /**
   * GET /bookings/delete/:id
   *
   * Delete booking page
   */
  app.get("/bookings/delete/:id", bookingsController.delete);

  /**
   * PUT /bookings
   *
   * Update booking
   */
  app.put("/bookings", bookingsController.update);
};
