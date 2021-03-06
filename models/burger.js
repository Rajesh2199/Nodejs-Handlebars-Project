// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function( condition, cb) {
        console.log(condition)
        orm.update("burgers",
         condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
      }
    };




module.exports = burger;
