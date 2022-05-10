const express = require("express");
const app = express();

//Telling express to use EJS as View Engine
app.set('view engine', 'ejs');

//Set up 'public' folder for static files
app.use(express.static('public'));

app.get("/:name?/:lang?", (req, res) => {
  let name = req.params.name ?? "Default User";
  let lang = req.params.lang ?? "Not sure yet";
  let showMsg = true;
  let products = [
    { name: "Doritos", price:2 },
    { name: "Coke", price:1.67 },
    { name: "Zucchini", price: 0.99},
    { name: "Pumpkin", price: 1.1},
    { name: "Beyond Burger", price: 5},
  ]
  res.render("index", {
    name, 
    lang,
    msg: showMsg,
    products,
  });
})

let port = 8080;

app.listen(port, () => {
  console.log("App running on port", port)
})