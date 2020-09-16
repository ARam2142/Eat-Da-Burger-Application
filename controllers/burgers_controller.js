//Dependencies
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router()

//get all the routers for the app
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let burObject = {
            burger: data
        };
        console.log(burObject);
        res.render("index", burObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured],
    function(res) {
        res.json({id: res.insertId});
    });
});

router.put("/api/burgers:id")



module.exports = router;