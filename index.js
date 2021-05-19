const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const PORT = process.env.NODE_ENV === "development" ? 4000 : process.argv[2];
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

require("./routes/properties.route")(app);
require("./routes/bookings.route")(app)
require("./routes/customers.route")(app)
require("./routes/invoices.route")(app)

app.listen(PORT, () => {
  `Server is listening on port ${PORT}`;
});
