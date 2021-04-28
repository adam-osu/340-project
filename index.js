const express = require("express");
const exphbs = require("express-handlebars");

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

app.get("/properties", (req, res) => {
  res.render("properties");
});

app.get("/properties/:id", (req, res) => {
  res.render("property", {
    propertyName: "433 Nowhere Road",
  });
});

app.listen(PORT, () => {
  `Server is listening on port ${PORT}`;
});
