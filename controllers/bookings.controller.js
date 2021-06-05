const { BookingsService } = require("../services/bookings.service");
const autoBind = require("auto-bind");

const { Booking } = require("../models/booking.model");
const { cleanPick } = require("../utilities/cleanPick");

class BookingsController {
  constructor() {
    this.bookingService = new BookingsService({ bookingModel: Booking });
    autoBind(this);
  }

  async index(req, res) {
    const bookings = await this.bookingService.findAll();
    res.render("bookings", { bookings });
  }

  async show(req, res) {
    const { id } = req.params;
    const [[booking], customers] = await this.bookingService.findOne({
      id,
      withCustomers: true,
    });

    res.render("booking", {
      booking,
      customers,
    });
  }

  _new(req, res) {
    res.render("addBooking", {
      properties: [
        { id: 1, name: "Test Property 1" },
        { id: 2, name: "Test Property 2" },
      ],
    });
  }

  async create(req, res) {
    const booking = cleanPick(req.body, [
      "start_date",
      "end_date",
      "property_id",
    ]);
    booking.created_at = new Date();

    const customers = cleanPick(req.body, ["customer_ids"]);

    await this.bookingService.create({ booking, customers });

    res.redirect("/bookings");
  }

  async removeCustomer(req, res) {
    const { booking_id, customer_id } = req.query;

    await this.bookingService.removeCustomer({ booking_id, customer_id });

    res.status(201).send({ message: "Customer removed from booking" });
  }

  async addCustomers(req, res) {
    const { customer_ids, booking_id } = req.body;

    await this.bookingService.addCustomers({ customer_ids, booking_id });

    res.status(201).send({ message: "Customer added to booking" });
  }

  async edit(req, res) {
    const { id } = req.params;

    const [[booking], customers] = await this.bookingService.findOne({
      id,
      withCustomers: true,
    });
    const [property] = await this.bookingService.findBookingProperty(id);

    res.render("editBooking", { booking, customers, property });
  }

  update(req, res) {
    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { BookingsController };
