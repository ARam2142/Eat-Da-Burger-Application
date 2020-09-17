var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

//object for the sql statement
var orm = {
    //select from the query table
    selectAll: function (table, tableInput, cb) {
        new Promise((resolve, reject) => {
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [tableInput, table, cb], function(err, result) {
                cb(result);
                resolve("ok");
            })
        }).catch(function(err) {
            throw new error("there is an error");
        });
    },

    //insert into sql query table
    insertOne: function (columns, values, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)
        });

    },

    updateOne: function (objColVals, condition, cb) {
        var queryString = "UPDATE burgers SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    deleteOne: function (values, condition, columns, cb) {
        var queryString = "DELETE FROM burgers WHERE" + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }

}


module.exports = orm;