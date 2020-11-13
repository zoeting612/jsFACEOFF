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
  //analyseUsers(userList);
}

fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ',' }, processData));
