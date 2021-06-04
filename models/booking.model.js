const { BaseModel } = require("./base.model");
const { pool } = require("../db");
const autoBind = require("auto-bind");

const {
  findAll,
  findOne,
  findBookingCustomers,
  addCustomers,
  removeCustomer,
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

  findOne({ id, withCustomers }) {
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

  addCustomers({ customers, booking_id }) {
    const data = customers.customer_ids.map((customer_id) => [
      customer_id,
      booking_id,
      new Date(),
    ]);

    return new Promise((resolve, reject) => {
      this.pool.query(addCustomers, [data], (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }

  removeCustomer({ customer_id, booking_id }) {
    console.log({customer_id, booking_id})
    return new Promise((resolve, reject) => {
      this.pool.query(
        removeCustomer,
        [customer_id, booking_id],
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });
  }
}

module.exports = { Booking: new BookingModel() };
