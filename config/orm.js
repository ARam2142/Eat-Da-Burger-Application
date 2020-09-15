var connection = require("../config/connection.js");


var orm = {
    selectAll: function (table, tableInput, selection) {
        var queryString = "SELECT FROM" + table;
        connection.query(queryString, [tableInput, selection], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    //insert into sql query table
    insertOne: function (table, columns, values) {
        var queryString = "INSERT INTO " + table;
        connection.query(queryString, [columns, values], function(err, res) {
            if (err) throw err;
            console.log(res);
        });

    },

    updateOne: function (table, columns, values, condition) {
        var queryString = "UPDATE" + table;
        queryString += "SET";
        queryString += "??";
        queryString += "WHERE";
        queryString += "??";

        connection.query(queryString, [columns, values, condition], function(err, res) {
            if (err) throw err;
            console.log(res);
        })
    },

    deleteOne: function (values, condition, columns) {
        var queryString = "DELETE FROM" + table + "WHERE" + condition;
        connection.query(queryString, [values, condition, columns], function(err, res) {
            if (err) throw err;
            console.log(res);
        })
    }

}


module.exports = orm;