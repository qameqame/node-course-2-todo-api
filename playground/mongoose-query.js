const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5aa719b5efbc7572ad6fed70';

var id = '5aa9a8ab7e286c3d21f82f56';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e)=>{
//     console.log(e);
// })

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User by id',user);
}).catch((e)=>{
    console.log(e);
})