//Dependencies
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

//try {
    //get all the routers for the app
    router.get("/", function(req, res) {
        burger.selectAll(function(data) {
            let hbeObject = {
                burgers: data
            };
            //HERE we need to either perform or have abstracted logic to perform and return rsults of any var or calcl
            //for view
            console.log(hbeObject);
            res.render("index", hbeObject);
        });
    });

/*} catch(err) {
    if (err) throw err;
    console.log(err);
}*/

//try {
    router.post("/api/burgers", function(req, res) {
        burger.insertOne(["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId});
        });
    });

/*} catch(err) {
    if (err) throw err
    console.log("there is an err")
}*/

//try {
    router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        
        console.log("condition", condition);
        
        burger.updateOne({devoured: req.body.devoured
        }, condition, function(result) {
            if(result.changedRows === 0) {
    
                return res.status(404).end();
                
            } else {
                res.status(200).end();
            }
        });
    });

/*} catch(err) {
    if (err) throw err;
    console.log(err)
}*/

//try {
    router.delete("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
    
        burger.deleteOne({devoured: req.body.devoured
        }, condition, function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

/*} catch(err) {
    if (err) throw err;
    console.log(err);
}*/

//export routers to server.js
module.exports = router;