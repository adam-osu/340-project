class BookingsService {
  constructor({ bookingModel }) {
    this.bookingModel = bookingModel;
  }
  async findAll() {
    return await this.bookingModel.findAll();
  }

  async findOne(id) {
    return await this.bookingModel.findOne(id);
  }

  async create(booking) {
    return await this.bookingModel.create(booking);
  }
}

module.exports = { BookingsService };
