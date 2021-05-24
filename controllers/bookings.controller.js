const { BookingsService } = require("../services/bookings.service");
const autoBind = require("auto-bind");

const { Booking } = require("../models/booking.model");

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

  async delete(req, res) {
    const { id } = req.params;
    const [[booking], customers] = await this.bookingService.delete({
      id,
      withCustomers: true,
    });
    
    res.render("bookings", { bookings });
  }

  _new(req, res) {
    res.render("addBooking", {
      properties: [
        { id: 1, name: "Test Property 1" },
        { id: 2, name: "Test Property 2" },
      ],
    });
  }

  create(req, res) {
    res.status(200).send(req.body);
  }

  edit(req, res) {
    res.render("editBooking", {
      // test data
      bookingId: 1234,
      start_date: "2020-07-04",
      end_date: "2020-07-08",
      property: 2,
      properties: [
        { id: 1, name: "Test Property 1" },
        { id: 2, name: "Test Property 2" },
      ],
    });
  }

  update(req, res) {
    res.status(201).send({ message: "Updated!" });
  }
}

module.exports = { BookingsController };
