var mongoose=require('mongoose');
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
        type:String,
        minlength:10
    },
    status:{
        type:String
    }
    });


    module.exports={story};