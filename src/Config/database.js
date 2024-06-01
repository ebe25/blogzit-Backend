const mongoose=require("mongoose");
const connect=async()=>{
    await mongoose.connect("mongodb+srv://vdnh123:abc123456@atlascluster.4qkviv9.mongodb.net/scheduler");
    console.log("connected");
    console.log(process.env.JWT_KEY);

}
module.exports=connect;