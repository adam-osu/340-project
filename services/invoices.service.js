class InvoicesService {
  constructor({ invoiceModel }) {
    this.invoiceModel = invoiceModel;
  }
  async findAll() {
    return await this.invoiceModel.findAll();
  }

  async findOne(id) {
    return await this.invoiceModel.findOne(id);
  }

  async create({ start_date, end_date, booking_id, rate }) {
    const totalDue = this.getTotalAmountDue({ start_date, end_date, rate });
    return await this.invoiceModel.create({
      booking_id,
      total_due: totalDue,
      amount_paid: 0,
      created_at: new Date(),
    });
  }

  async update({ start_date, end_date, booking_id, rate }) {
    const totalDue = this.getTotalAmountDue({ start_date, end_date, rate });

    return await this.invoiceModel.update({
      id: booking_id,
      updates: { total_due: totalDue },
    });
  }

  getTotalAmountDue({ start_date, end_date, rate }) {
    // https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    // Get the time difference in ms, convert to day
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const timeDiff = Math.abs(startDate - endDate); // diff in ms
    const daysBooked = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysBooked * rate;
  }
}

module.exports = { InvoicesService };
