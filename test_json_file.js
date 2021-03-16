// // require csvtojson module
// const CSVToJSON = require('csvtojson');


// // convert users.csv file to JSON array
// CSVToJSON().fromFile('InstaMem_sample.csv')
//     .then(users => {

//         // users is a JSON array
//         // log the JSON array
//         console.log(users);
//         jsonfile = users;
//     }).catch(err => {
//         // log error if any
//         console.log(err);
//     });

var jsonfile = [
    {
      "TrialNumber": 1,
      "EncodedImage": "yes",
      "Directory": "img/testimgs/",
      "Filename": "test1.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 26,
      "TestImage": "yes",
      "ActorGender": "Male",
      "ActorRace": "Other",
      "ActorID": "test1",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "no",
      "Directory": "img/testimgs/",
      "Filename": "orange.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 4,
      "TestImage": "no",
      "ActorGender": "shape",
      "ActorRace": "circle",
      "ActorID": "orange",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "yes",
      "Directory": "img/testimgs/",
      "Filename": "test2.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 15,
      "TestImage": "yes",
      "ActorGender": "Female",
      "ActorRace": "Caucasian",
      "ActorID": "test2",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "yes",
      "Directory": "img/testimgs/",
      "Filename": "test3.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 3,
      "TestImage": "yes",
      "ActorGender": "Male",
      "ActorRace": "Caucasian",
      "ActorID": "test3",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "no",
      "Directory": "img/testimgs/",
      "Filename": "blue.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 12,
      "TestImage": "no",
      "ActorGender": "shape",
      "ActorRace": "circle",
      "ActorID": "blue",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "yes",
      "Directory": "img/testimgs/",
      "Filename": "test4.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 1,
      "TestImage": "yes",
      "ActorGender": "Female",
      "ActorRace": "Other",
      "ActorID": "test4",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    },
    {
      "TrialNumber": 1,
      "EncodedImage": "yes",
      "Directory": "img/testimgs/",
      "Filename": "test5.jpg",
      "Condition": "Memory",
      "MemoryProbe": "Lure",
      "ExpressionIntensity": 2,
      "TestImage": "yes",
      "ActorGender": "Male",
      "ActorRace": "Caucasian",
      "ActorID": "test5",
      "FacialExpression1": "neutral",
      "FacialExpression2": "happy_closed",
      "Block": 1
    }
  ]

var test_stim = [
    {
        "face" : "img/testimgs/test1.jpg",
        // "bryanna" : "makumbi",
        // "zoe" : "ting",
        // "julia" : "swaitek",
        // "chloe" : "kardashian"
    },
    {
        "face" : "img/testimgs/test2.jpg",
        // "bryanna1" : "makumbi1",
        // "zoe1" : "ting1",
        // "julia1" : "swaitek1",
        // "chloe1" : "kardashian1"
            
    },
    {
        "face": "img/testimgs/test3.jpg",
        // "bryanna2" : "makumbi2",
        // "zoe2" : "ting2",
        // "julia2" : "swaitek2",
        // "chloe2" : "kardashian2"
    }
]





// <!DOCTYPE html>
// <html>
    
// <script src= "https://d3js.org/d3.v4.min.js"> </script> 
// <script src= "https://d3js.org/d3-dsv.v1.min.js"> </script> 
// <script src= "https://d3js.org/d3-fetch.v1.min.js"> </script> 
      
// <script> 
//     d3.csv("InstaMem_sample.csv", function(data) {
//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i].StimID);
//             console.log(data[i].ImageName);
//         }
//     });
// </script> 







// <!-- 
// <script src="https://d3js.org/d3-dsv.v1.min.js"></script>
//     <script>
     
//     //  d3.csv("/InstaMem_sample.csv", function(d) {
//     //     return {
//     //         StimId : d.StimID,
//     //         ImageNamee : d.ImageName,
//     //         TrialNumber : d.TrialNumber,
//     //         Block : d.Block,
//     //         StartLevel : d.StartLevel
//     //     };
//     // }).then(function(data) {
//     // console.log(data[0]);
//     // });
     
//         dsv.parse()


//     </script>  -->
// </html>