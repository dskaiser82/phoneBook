var express = require('express');
var app = express();
var phoneBook = require('./model/map.js');

var port = 3000;

//Search String
var searchTerm = "Bonb";

// var results = [];

// function Yeah(){
//
//     for (var i = 0; i < 6; i++) {
//     if(result2 == true){
//       //filter to loop through
//       var lookFor = /phoneBook[i].lastName/i;
//       var result2 = lookFor.test(searchTerm);
//       returnNames = phoneBook[i].lastName+", "+phoneBook[i].firstName+"."
//        console.log(lookFor)
//
//     }
//   }
//
//   // console.log(phoneBook[searchTerm].phone)
// }
//
// Yeah()

//change data map to All jacobs, all Chans,


// The string:
var str = "Ivar Chan is the best!";

// Look for "Hello"
var patt = /Ivar/i;
var result = patt.test(str);

// Look for "W3Schools"
patt2 = /World/i;
result2 = patt2.test(str);

console.log(result)




////==================Server Spinning==========================================
app.listen(port, function(){
  console.log('Server is spinning ' + "on " + port + ",bruh")
})
