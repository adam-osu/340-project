const { BaseModel } = require("./base.model");
const { pool } = require("../db");
const autoBind = require("auto-bind");

const {
  findAll,
  findOne,
  findBookingCustomers,
} = require("./queries/bookings.queries");
class BookingModel extends BaseModel {
  constructor() {
    super({ name: "bookings" });
    autoBind(this);
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.pool.query(findAll, (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }

  findOne({id, withCustomers}) {
    const bookingPromise = new Promise((resolve, reject) => {
      this.pool.query(findOne, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });

    const bookingCustomersPromise = new Promise((resolve, reject) => {
      this.pool.query(findBookingCustomers, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });

    if (withCustomers) {
      return Promise.all([bookingPromise, bookingCustomersPromise]);
    }

    return bookingPromise;
  }

  create(booking) {
    return super.create(booking);
  }

  delete(id) {
    return super.delete(id);
  }
}

module.exports = { Booking: new BookingModel() };
