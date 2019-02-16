const mongoClient=require('mongodb').MongoClient;


mongoClient.connect('mongodb://localhost:27017/UserStoryDistribution', (err,client)=>{
    if(err){
        return console.log("Unable to Connect to Mongo Server");
    }
    console.log('Connected to MongoDb Server');
    const db=client.db('UserStoryDistribution');
    db.collection('UserStories').insertOne({
        type: 'Bug',
        Criticality:'Very Critical',
        Env:'Production',
        description:'Complete the Crud Functunality of User Story Distribution',
        Type:'enque'
    },(err,result) =>{
        if(err){
            return console.log("something Went Wrong While Inserting Data");
        }
        console.log(JSON.stringify(result.ops,undefined,2)) ;
    })
    client.close();
});