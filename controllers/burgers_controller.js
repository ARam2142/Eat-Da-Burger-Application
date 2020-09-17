//Dependencies
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

try {
    //get all the routers for the app
    router.get("/", function(req, res) {
        burger.all = (data) => {
            let hbeObject = {
                burger: data
            };
            console.log(hbeObject);
            res.render("index", hbeObject);
        };
    });

} catch(err) {
    if (err) throw err;
    console.log(err);
}

try {
    router.post("/api/burgers", function(req, res) {
        burger.create(["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured],
        function(result) {
            res.json({id: result.insertid});
        });
    });

} catch(err) {
    if (err) throw err
    console.log("there is an err")
}

try {
    router.put("/api/burgers:id", function(req, res) {
        var condition = "id = " + req.params.id;
    
        burger.update({devoured: req.body.devoured
        }, condition, function(result) {
            if(result.changedRows === 0) {
    
                return res.status(404).end();
                
            } else {
                res.status(200).end();
            }
        });
    });

} catch(err) {
    if (err) throw err;
    console.log(err)
}

try {
    router.delete("/api/burgers:id", function(req, res) {
        var condition = "id = " + req.params.id;
    
        burger.delete({devoured: req.body.devoured
        }, condition, function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

} catch(err) {
    if (err) throw err;
    console.log(err);
}



//export routers to server.js
module.exports = router;