const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser')

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
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/properties", (req, res) => {
  res.render("properties");
});

app.get("/properties/new", (req, res) => {
  res.render("addProperty");
});

app.post("/properties", (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body);
});

app.get("/properties/:id", (req, res) => {
  res.render("property", {
    propertyName: "433 Nowhere Road",
  });
});

app.listen(PORT, () => {
  `Server is listening on port ${PORT}`;
});
