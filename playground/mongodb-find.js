//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectId('5aa4a6b6575870426a292668')
    // }).toArray().then((docs)=>{
    //    console.log('Todos'); 
    //    console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch tods',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //    console.log(`Todos count:${count}`); 
    // },(err)=>{
    //     console.log('Unable to fetch tods',err);
    // });

    db.collection('Users').find({name:'Hiroki'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));

    });


    // client.close();

});