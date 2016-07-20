var express = require('express');
var app = express();
var phoneBook = require('./model/map.js');

var port = 3000;


var searchTerm = "Daniel Kaiser";
var results = [];



  function Yeah(){
      for (var i = 0; i < 6; i++) {
      if(searchTerm == phoneBook[i].lastName || searchTerm.includes(phoneBook[i].lastName)){
        results = "Name Found: "+phoneBook[i].lastName+", "+phoneBook[i].firstName+"."
        console.log(results)

      }
    }
  }

  Yeah()


// var potato = "Ivar Chan".includes("Cha");
// console.log(potato)



////==================Server Spinning==========================================
app.listen(port, function(){
  console.log('Server is spinning ' + "on " + port + ",bruh")
})
