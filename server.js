/* Library Imports*/
var express= require('express');
var bodyParser=require('body-parser');

/* Local Imports*/
var {mongoose}=require('./dbConnectionProperties');
var {story}=require('./models/UserStories');

/*variable declaration*/

var app=express();
app.use(bodyParser.json());
/*Story Creation*/

app.post('/newStory',(req,res)=>{
    var Story=new  story({
         Type:req.body.Type,
         Criticality: req.body.criticality,
         Env:req.body.Env,
         description:req.body.description,
         status:req.body.status
    });

    Story.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e)
    });

})

app.listen(3000,()=>{
    console.log('Started on Port 3000');
});
