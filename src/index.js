const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const connect=require("./Config/database")
const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT;
const router=require("./Routes/index")
function start(){
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded(true));

   app.use("/api",router);
   app.listen(PORT,async(req,res)=>{
      console.log(PORT);
    console.log(`listening on the PORT ${PORT}`);
   await connect();
  

   })

}
start();