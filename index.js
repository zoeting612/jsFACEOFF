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
var study_imgs_paths;
var study_imgs;

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

  study_images = study_imgs()
  
  function get_imgs_path(images){
    const paths = []
    var img_path = ""
    for (var i = 0; i<images.length; i++){
      img_path = images[i].Directory+images[i].Filename
      paths.push(img_path)
    }
    return paths
  }
  study_imgs_paths = get_imgs_path(study_images)
  face_display_perception.timeline_variables = study_imgs_paths.map(function (d){
    return {face: d};
  });

  //test get_img_path function and print list of study imgs paths in console
  for (var i=0; i<study_imgs_paths.length; i++){
    console.log("image: "+ study_imgs_paths[i])
  }
}

fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ',' }, processData));



    /* create timeline */
    var timeline = [];

    /* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: "Welcome to the experiment. Press any key to begin."
    };
    timeline.push(welcome);

    /* define instructions trial */
    var instructions = {
        timeline: [
            {
                type: 'html-keyboard-response',
                stimulus: "<p>During this experiment you will be asked to learn a series of faces,"+
                          " which will vary in facial expression.</p>"+
                          "<p>The images will be presented in varying degrees of expression,"+
                          " and your task is to remember the expression of each face.</p>" +
                          "<p>You will have 4 seconds to learn each face during the study phase.</p>" +
                          "<p>Press any key to continue.</p>",
            },
            /*example of expressions*/
            {
                type: 'html-keyboard-response',
                stimulus: "<div style='float: left;'><img src='img/example.png'></img>"+
                          "<p>Press any key to continue.</p>",
            },

            {
                type: 'html-keyboard-response',
                stimulus: "<p>We will then ask you to reconstruct the each face that you studied.<p>"+
                          "<p>For some faces, you will be asked to reconstruct the face immediately after viewing it.<p>"+
                          "<p>For other faces, you will be asked to reconstruct the face in a separate memory test phase"+
                          " after you have learned a number of faces. This memory test will come at the end of each block."+
                          "<p>In the memory test, there may be some new faces presented.<p>"+
                          "<p>Press any key to continue.</p>",
            },

            {
                type: 'html-keyboard-response',
                stimulus: "<p>During the memory test phase only, you will also be asked to rate how vividly you remember that face"+
                          " on a scale of 1 (I don't remember this face) to 6 (I remember this face very vividly).<p>"+
                          "<p>Using the slider, make your response.<p>"+
                          "<p>If you don't remember the face at all, select 1.<p>"+
                          "<p>Press any key to continue.</p>",
            }
        ],
    }
    timeline.push(instructions);

    // var example_tests = {
    //     timeline: [
    //     ],
    // }

    /* Display faces for perception tests */
    var face_display_perception = {
        timeline: [
            {
                type: 'html-keyboard-response',
                stimulus: '+',
                choices: jsPsych.NO_KEYS,
                trial_duration: 1000
            },
            
            {
                type: 'html-keyboard-response',
                stimulus: function(){
                    var html="<img src='"+jsPsych.timelineVariable('face', true)+"'>";
                    return html;
                },          
                choices: jsPsych.NO_KEYS,
                trial_duration: 4000
            },
        ],
        timeline_variables: [
        ]
    }
    timeline.push(face_display_perception)

    

    /* start the experiment */
    jsPsych.init({
      timeline: timeline,
      on_finish: function() {
        jsPsych.data.displayData();
      }
    });