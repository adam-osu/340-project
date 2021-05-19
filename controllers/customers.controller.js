class CustomersController {
  index(req, res) {
    res.render("customers");
  }

  show(req, res) {
    res.render("customer", {
      first_name: "John",
      last_name: "Doe",
    });
  }

  _new(req, res) {
    res.render("addCustomer");
  }
  
  create(req, res) {
    res.status(200).send(req.body);
  }

  edit(req, res) {
    res.render("editCustomer", {
      // test data
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@jd.com",
    });
  }

  update(req, res) {
    res.status(201).send({message: 'Updated!'});
  }
}

module.exports = { CustomersController };