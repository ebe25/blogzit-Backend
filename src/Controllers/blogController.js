const blogService=require("../Services/blogService");
const blogServiceObj=new blogService();
const createBlog=async(req,res)=>{
    try{
        const response=await blogServiceObj.createBlog(req.body);
        console.log(response);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Created the blog",
            err:{}

        })

        
        
    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot signUp",
            err:err.message
        })


    }

}
module.exports={
    createBlog
}