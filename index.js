class subject{
    set ActorGender(ActorGender){
        this._ActorGender=ActorGender;
    }
    set ActorRace(ActorRace){
        this._ActorRace=ActorRace;
    }
    set ActorID(ActorID){
        this._ActorID=ActorID;
    }
    set Directory(Directory){
        this._Directory=Directory;
    }
    set Filename(Filename){
        this._Filename=Filename;
    }
    set ExpressionIntensity(ExpressionIntensity){
        this._ExpressionIntensity=ExpressionIntensity;
    }
    set TestImage(TestImage){
        this._TestImage=TestImage;
    }
    get ActorGender(){
        return this._ActorGender;
    }
    get ActorRace(){
        return this._ActorRace;
    }
    get ActorID(){
        return this._ActorID;
    }
    get Directory(){
        return this._Directory;
    }
    get Filename(){
        return this._Filename;
    }
    get ExpressionIntensity(){
        return this._ExpressionIntensity;
    }
    get TestImage(){
        return this._TestImage;
    }
    constructor(){
    }
}
let subs=[];// Array to store subject Objects
const csv=require('csvtojson')
// Invoking csv returns a promise
const converter=csv()
.fromFile('./TestData.csv')
.then((json)=>{
    let e;
    json.forEach((row)=>{
        e=new Subject();// New Subject Object
        Object.assign(e,row);// Assign json to the new Subject
        emp.push(e);// Add the Subject to the Array
        
    });
}).then(()=>{
    // Output the names of the Subjects
    emp.forEach((em)=>{
        console.log(em.Name);// Invoke the Name getter
    });
});