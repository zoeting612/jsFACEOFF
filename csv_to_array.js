// function csv2array(data, delimeter) {
//     // Retrieve the delimeter
//     if (delimeter == undefined) 
//       delimeter = ',';
//     if (delimeter && delimeter.length > 1)
//       delimeter = ',';
  
//     // initialize variables
//     var newline = '\n';
//     var eof = '';
//     var i = 0;
//     var c = data.charAt(i);
//     var row = 0;
//     var col = 0;
//     var array = new Array();
  
//     while (c != eof) {
//       // skip whitespaces
//       while (c == ' ' || c == '\t' || c == '\r') {
//         c = data.charAt(++i); // read next char
//       }
      
//       // get value
//       var value = "";
//       if (c == '\"') {
//         // value enclosed by double-quotes
//         c = data.charAt(++i);
        
//         do {
//           if (c != '\"') {
//             // read a regular character and go to the next character
//             value += c;
//             c = data.charAt(++i);
//           }
          
//           if (c == '\"') {
//             // check for escaped double-quote
//             var cnext = data.charAt(i+1);
//             if (cnext == '\"') {
//               // this is an escaped double-quote. 
//               // Add a double-quote to the value, and move two characters ahead.
//               value += '\"';
//               i += 2;
//               c = data.charAt(i);
//             }
//           }
//         }
//         while (c != eof && c != '\"');
        
//         if (c == eof) {
//           throw "Unexpected end of data, double-quote expected";
//         }
  
//         c = data.charAt(++i);
//       }
//       else {
//         // value without quotes
//         while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
//           value += c;
//           c = data.charAt(++i);
//         }
//       }
  
//       // add the value to the array
//       if (array.length <= row) 
//         array.push(new Array());
//       array[row].push(value);
      
//       // skip whitespaces
//       while (c == ' ' || c == '\t' || c == '\r') {
//         c = data.charAt(++i);
//       }
  
//       // go to the next row or column
//       if (c == delimeter) {
//         // to the next column
//         col++;
//       }
//       else if (c == newline) {
//         // to the next row
//         col = 0;
//         row++;
//       }
//       else if (c != eof) {
//         // unexpected character
//         throw "Delimiter expected after character " + i;
//       }
      
//       // go to the next character
//       c = data.charAt(++i);
//     }  
    
//     return array;
//   }
//   var csv = "TestData.csv";
//   var array = csv2array(csv);

//   console.log(array[1])

// $(document).ready(function() {
//     $.ajax({
//         type: "GET",
//         url: "TestData.csv",
//         dataType: "csv",
//         success: function(data) {processData(data);}
//      });
// });

// function processData(allText) {
//     var allTextLines = allText.split(/\r\n|\n/);
//     var headers = allTextLines[0].split(',');
//     var lines = [];

//     for (var i=1; i<allTextLines.length; i++) {
//         var data = allTextLines[i].split(',');
//         if (data.length == headers.length) {

//             var tarr = [];
//             for (var j=0; j<headers.length; j++) {
//                 tarr.push(headers[j]+":"+data[j]);
//             }
//             lines.push(tarr);
//         }
//     }
//     // alert(lines);
// }

const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');

const filePath = path.join(__dirname, 'TestData.csv');
fs.readFile(filePath, (error, data) => {
  if (error) {
    return console.log('error reading file');
  }
  neatCsv(data)
    .then((parsedData) => console.log(parsedData));
});