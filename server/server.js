
const express= require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const fs = require('fs');

const {mongoose}= require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User}= require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','hbs')

app.get('/',(req,res)=>{
res.render('index')
})

app.post('/todos',(req,res)=>{
 res.render('data',{
     user:req.body
 });
 let data = req.body;
 console.log(data);

 const todo = new Todo({
     name:req.body.name,
     roll:req.body.roll,
     course:req.body.course
 });

 todo.save().then(docs=>{
   
     const info = JSON.stringify(docs,undefined,2)
    console.log('successfully saved...');
    fs.writeFile('data.txt',info,(err)=>{
 
         if(err){
            return console.log('file is not created')
         }
         console.log('file created successfully...')
    })
    console.log(docs)
 },(err)=>{
     console.log(err)
 })
})

app.get('/todos',(req,res)=>{

    Todo.find().then(docs=>{

        res.json(docs)

    },(err)=>{

        res.status(404);
        console.log(err)
    })

})



app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
