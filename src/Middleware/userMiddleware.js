const jwt=require("jsonwebtoken");
const JWT_KEY="ancalcnaajvnaddajvnkvadvdjb"
const authenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    const data=jwt.verify(token,JWT_KEY);
   
    req.body={
        ...req.body,
        userId:data.id
    }




    next();

}
module.exports=authenticate;