const mongoose=require("mongoose");

const BlogSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})
const blog=mongoose.model('blog',BlogSchema);
module.exports=blog;