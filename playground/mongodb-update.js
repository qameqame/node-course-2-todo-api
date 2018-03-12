//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId("5aa5c5cf7e286c3d21f82f0c")

    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5aa4aa44e6001742e23dc9b3")
    },{
        $inc:{
            age:1
        }
    }).then((result)=>{
        console.log(result);
    });


    // client.close();

});