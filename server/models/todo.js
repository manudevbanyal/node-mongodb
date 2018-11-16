
const mongoose=require('mongoose');

var Todo = mongoose.model('Student',{
    name:{
        type : String,
        required:true,
        minlength:1,
        trim:true
    },
    roll:{
        type:Number,
        default:false
    },
    course:{
        type:String,
        default:null
    }
});

module.exports={
    Todo
}