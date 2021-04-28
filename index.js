const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const PORT = 4000;
const app = express();

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/////////////
// Properties
/////////////

app.get("/properties", (req, res) => {
  res.render("properties");
});

app.get("/properties/new", (req, res) => {
  res.render("addProperty");
});

app.get("/properties/edit/:id", (req, res) => {
  res.render("editProperty", {
    // test data
    propertyName: "Test",
    address: "123 Test Road",
    rate: 40,
    maxOccupancy: 12,
  });
});

app.post("/properties", (req, res) => {
  res.status(200).send(req.body);
});

app.get("/properties/:id", (req, res) => {
  res.render("property", {
    propertyName: "433 Nowhere Road",
  });
});

/////////////
// Bookings
/////////////

app.get("/bookings", (req, res) => {
  res.render("bookings");
});

app.get("/bookings/new", (req, res) => {
  res.render("addBooking");
});

app.get("/bookings/edit/:id", (req, res) => {
  res.render("editBooking", {
    // test data
    bookingID: 1234,
    start_date: "2020-07-04",
    end_date: "2020-07-08",
  });
});

app.post("/bookings", (req, res) => {
  res.status(200).send(req.body);
});

app.get("/bookings/:id", (req, res) => {
  res.render("booking", {
    start_date: "2020-07-04",
  });
});

/////////////
// Customers
/////////////

app.get("/customers", (req, res) => {
  res.render("customers");
});

app.get("/customers/new", (req, res) => {
  res.render("addCustomer");
});

app.get("/customers/edit/:id", (req, res) => {
  res.render("editCustomer", {
    // test data
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@jd.com",
  });
});

app.post("/customers", (req, res) => {
  res.status(200).send(req.body);
});

app.get("/customers/:id", (req, res) => {
  res.render("customer", {
      first_name: "John",
      last_name: "Doe"
  });
});

/////////////
// Invoices
/////////////

app.get("/invoices", (req, res) => {
  res.render("invoices");
});

app.get("/invoices/edit/:id", (req, res) => {
  res.render("editInvoice", {
    // test data
    invoiceId: 1234,
    totalDue: 3000,
    amountPaid: 1500
  });
});

app.post("/invoices", (req, res) => {
  res.status(200).send(req.body);
});

app.get("/invoices/:id", (req, res) => {
  res.render("invoice", {
    invoiceId: 1234,
  });
});

app.listen(PORT, () => {
  `Server is listening on port ${PORT}`;
});
