var fs = require("fs");
var parse = require("csv-parse");

var csvFile = "TestData.csv";

class User {
  constructor(ActorGender,ActorRace,ActorID,Directory,Filename,ExpressionIntensity,TestImage) {
    this.ActorGender = ActorGender;
    this.ActorRace = ActorRace;
    this.ActorID = ActorID;
    this.Directory = Directory;
    this.Filename = Filename;
    this.ExpressionIntensity = ExpressionIntensity;
    this.TestImage = TestImage;
  }
}

const processData = (err, data) => {
  if (err) {
    console.log(`An error was encountered: ${err}`);
    return;
  }

  data.shift(); // only required if csv has heading row

  const userList = data.map(row => new User(...row));
  /* prints the gender of the first subject*/
  console.log(userList[0].ActorGender)
  //analyseUsers(userList);
  
  /* processes which images are test images and returns a list of their paths*/
  function perception_images(){
    var test_images = []
    for (var i = 0; i<userList.length; i++){
      if (userList[i].TestImage=="yes"){
        test_images.push(userList[i].Directory+userList[i].Filename)
      }
    }
    return test_images
  }
  //test this function
  var images = perception_images()
  console.log(images)
}

fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ',' }, processData));
