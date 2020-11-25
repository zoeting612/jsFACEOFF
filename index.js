var fs = require("fs");
var parse = require("csv-parse");

var csvFile = "list-001.csv";

class User {
  constructor(TrialNumber,EncodedImage,Directory,Filename,Condition,
    MemoryProbe,ExpressionIntensity,TestImage,ActorGender,ActorRace,
    ActorID,FacialExpression1,FacialExpression2,Block) {
    this.TrialNumber = TrialNumber;
    this.EncodedImage = EncodedImage;
    this.Directory = Directory;
    this.Filename = Filename;
    this.Condition = Condition;
    this.MemoryProbe = MemoryProbe;
    this.ExpressionIntensity = ExpressionIntensity;
    this.TestImage = TestImage;
    this.ActorGender = ActorGender;
    this.ActorRace = ActorRace;
    this.ActorID = ActorID;
    this.FacialExpression1 = FacialExpression1;
    this.FacialExpression2 = FacialExpression2;
    this.Block = Block;
  }
}

const processData = (err, data) => {
  if (err) {
    console.log(`An error was encountered: ${err}`);
    return;
  }

  data.shift(); // only required if csv has heading row

  const userList = data.map(row => new User(...row));
  
  //returns a list of objects with only the images to be displayed during the study phase
  //objects include trial number, directory, filename, and condition
  function study_imgs(){
    const study_images = []
    for (var i = 0; i<userList.length;i++){
      if(userList[i].EncodedImage=="Yes"){ 
        const study_img = {
          TrialNumber: userList[i].TrialNumber,
          Directory: userList[i].Directory,
          Filename: userList[i].Filename,
          Condition: userList[i].Condition,
        }

        const study_img_map = new Map(Object.entries(study_img))
        const study_img_obj = Object.fromEntries(study_img_map)
        study_images.push(study_img_obj)
      }
    }
    return study_images
  }

  var study_images = study_imgs()
  console.log(study_images[0].Directory)
}

fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ',' }, processData));
