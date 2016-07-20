var express = require('express');
var app = express();
var phoneBook = require('./model/map.js');

var port = 3000;


var searchTerm = "Daniel Kaiser";
var results = [];



  function Yeah(){
      for (var i = 0; i < 6; i++) {
      // console.log(i)
      // console.log(phoneBook[i].firstName)
      // console.log("starting next loop")
      if(searchTerm == phoneBook[i].lastName || searchTerm.includes(phoneBook[i].lastName)){
        results = "Name Found: "+phoneBook[i].lastName+", "+phoneBook[i].firstName+"."
        console.log(results)

      }
    }
  }

  Yeah()


//change data map to All jacobs, all Chans,


// var potato = "Ivar Chan".includes("Cha");
// console.log(potato)

// The string:
// var str = "Chan";
//
// // Look for "Hello"
// var patt = phoneBook[1].lastName
// var result = patt.test(str);
//  console.log(patt)
//
// function Yolo(){
// for (var i = 0; i < 6; i++) {
//     if(result === true){
//     returnNames = phoneBook[i].lastName+", "+phoneBook[i].firstName+"."
//      console.log(returnNames)}
//   }
// }
//
// Yolo()




////==================Server Spinning==========================================
app.listen(port, function(){
  console.log('Server is spinning ' + "on " + port + ",bruh")
})
