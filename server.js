/* Library Imports*/
var express= require('express');
var bodyParser=require('body-parser');

/* Local Imports*/
var {mongoose}=require('./dbConnectionProperties');
var {story}=require('./models/UserStories');

/*variable declaration*/

var app=express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*Story Creation*/

app.post('/newStory',(req,res)=>{
    console.log(req);
    
    var Story=new  story({
         Type:req.body.feature,
         Criticality: req.body.urgency,
         Env:req.body.Env,
         description:req.body.description,
         status:req.body.status
    });
    console.log(Story);
   /*  Story.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e)
    });
 */
});


/* Get Api*/
app.get('/story',(req,res)=>{
    story.find().then((stories)=>{
        res.send({stories});
    },(e)=>{
        res.status(400).send(e);
    })
})


app.listen(3000,()=>{
    console.log('Started on Port 3000');
});
