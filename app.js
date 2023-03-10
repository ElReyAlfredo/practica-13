const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/person/:id", function (req, res) {
  res.render("person", { numero: req.params.id });
});

app.get("api", function (req, res) {
  res.json({ firstname: "Johan", lastname: "Liberth" });
});

app.get("/persona", function (req, res) {
  res.render("persona", { data });
});

let data = [
  { id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19 },
  { id: 2, nombre: "Estela", apellido: "Perez Suarez", edad: 18 },
  { id: 3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17 },
];
app.listen(port);
