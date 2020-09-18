// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) { 
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(columns, values, cb) {
      orm.insertOne("burgers", columns, values, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteOne: function(condition, cb) {
      orm.deleteOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  

module.exports = burger;