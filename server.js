var express= require('express');
var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/UserStoryDistribution');

var story = mongoose.model('UserStories',{
Type:{
    type:String
},
Criticality:{
    type:String
},
Env:{
    type:String
},
description:{
    type:String
},
status:{
    type:String
}
});

var story=new story({
    Type: "feature",
    Criticality: "moderate",
    Env: "dev",
    description:"Add the Drag and Drop Feature For Stories",
    status:"enque"

});

story.save().then((doc)=>{
console.log("Story Saved",doc)

},(e)=>{
    console.log("unable to save story");
});