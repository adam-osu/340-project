const { BaseModel } = require("./base.model");
const autoBind = require("auto-bind");

class BookingModel extends BaseModel {
  constructor() {
    super({ name: "bookings" });
    autoBind(this);
  }

  findAll() {
    return super.findAll();
  }

  findOne(id) {
    return super.findOne(id);
  }

  create(booking) {
    return super.create(booking);
  }
}

module.exports = { Booking: new BookingModel() };