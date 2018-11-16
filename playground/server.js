
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/TodoApp');

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    name:String,
    roll:Number,
    Course:String
});

const Todo = mongoose.model('Todo',TodoSchema);
const newTodo = new Todo({
    name:"manu banyal",
    roll:7258,
    course:"B.tech"
    })

newTodo.save().then((docs)=>{
    console.log('saving successfully...');
    console.log(JSON.stringify(docs,undefined,2));
    const data =JSON.stringify(docs,undefined,2)
    fs.writeFile('data.txt',data,(err)=>{
        if(err){
            return console.log('file created successfully')
        }
    })
},(err)=>{
    console.log(' there is some error saving')
})
