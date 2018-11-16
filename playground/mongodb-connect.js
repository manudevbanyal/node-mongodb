// const mongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{

    if(err){
        return console.log('there is some error while connections')
    }else{

        console.log('connected successfully..');
        const db = client.db('TodoApp');
        db.collection('stu').insertOne({
            name:"manu banyal",
            roll:7258
        },(err,res)=>{
            if(err){
                return console.log('there is some error while inserting data,');
            }else{
                console.log('data inserted successfully...');
                console.log(JSON.stringify(res.ops,undefined,2));
            }

        })

        client.close();
    }


});

