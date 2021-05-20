const { BaseModel } = require("./base.model");
const { pool } = require("../db");
const autoBind = require("auto-bind");

const {findAll} = require('./queries/bookings.queries')
class BookingModel extends BaseModel {
  constructor() {
    super({ name: "bookings" });
    autoBind(this);
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.pool.query(
        findAll,
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });

  }

  findOne(id) {
    return super.findOne(id);
  }

  create(booking) {
    return super.create(booking);
  }
}

module.exports = { Booking: new BookingModel() };
