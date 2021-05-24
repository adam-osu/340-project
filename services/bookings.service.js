class BookingsService {
  constructor({ bookingModel }) {
    this.bookingModel = bookingModel;
  }
  async findAll() {
    return await this.bookingModel.findAll();
  }

  async findOne({id, withCustomers = false}) {
    return await this.bookingModel.findOne({id, withCustomers});
  }

  async delete({id, withCustomers = false}) {
    return await this.bookingModel.delete({id, withCustomers});
  }

  async create(booking) {
    return await this.bookingModel.create(booking);
  }
}

module.exports = { BookingsService };
