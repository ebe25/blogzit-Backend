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
const getBlog=async(req,res)=>{
    try{
        const response=await blogServiceObj.getAllBlogs();
        console.log(response);
        return res.status(200).json({
            data:response,
            status:true,
            message:"fetched the blog",
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
const getBlogById=async(req,res)=>{
    try{
        console.log(req.params.id);
        const response=await blogServiceObj.getBlogById(req.params.id);
        return res.status(200).json({
            data:response,
            status:true,
            message:"fetched the blog",
            err:{}

        })

        
        
    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Blog not found",
            err:err.message
        })


    }

}
module.exports={
    createBlog,
    getBlog,
    getBlogById
}