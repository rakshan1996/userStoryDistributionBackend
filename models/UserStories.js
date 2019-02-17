var mongoose=require('mongoose');
var story = mongoose.model('UserStories',{
    Type:{
        type:String,
        required: true
    },
    Criticality:{
        type:String
    },
    Env:{
        type:String
    },
    description:{
        type:String,
        required: true,
        minlength:10
    },
    status:{
        type:String
    }
    });


    module.exports={story};