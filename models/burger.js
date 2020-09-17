// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(columns, values, cb) {
      orm.create("burger", columns, values, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      burger.update("burger", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteOne: function(condition, cb) {
      orm.delete("burger", condition, function(res) {
        cb(res);
      });
    }
  };
  

module.export = burger;