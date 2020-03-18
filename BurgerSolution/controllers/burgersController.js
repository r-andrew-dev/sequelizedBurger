var express = require("express");

var router = express.Router();
var burger = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.Burger.findAll({})
    .then(function(burgerData) {
      res.render("index", { burger_data: burgerData });
    })
  });

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  console.log(req.body)
  burger.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false,
   })
   .then(function(newBurger) {
    console.log(newBurger);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  burger.Burger.update(req.params.id).then(function(eatenBurger) {
    console.log(eatenBurger);
    res.sendStatus(200);
  });
});

module.exports = router;
