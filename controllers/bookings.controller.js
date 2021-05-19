class BookingsController {
  index(req, res) {
    res.render("bookings");
  }

  show(req, res) {
    res.render("booking", {
      start_date: "2020-07-04",
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
    res.status(201).send({message: 'Updated!'});
  }
}

module.exports = { BookingsController };
