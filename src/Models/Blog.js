const mongoose=require("mongoose");

const BlogSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name:{
        type:String
    }
},{
    timestamps:true
})
const blog=mongoose.model('blog',BlogSchema);
module.exports=blog;