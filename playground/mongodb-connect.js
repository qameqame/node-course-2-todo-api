//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // // });

    // db.collection('Users').insertOne({
    //     //_id:123,
    //     name:'Hiroki',
    //     age: 39,
    //     location: 'kurihira'
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert Users');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();

});