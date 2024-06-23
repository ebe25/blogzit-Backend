const blogService=require("../Services/blogService");
const blogServiceObj=new blogService();
const createBlog=async(req,res)=>{
    try{
        const response=await blogServiceObj.createBlog(req.body);
  
        return res.status(201).json({
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

const blogsSeeder = async(req,res)=>{
    try{
        const response=await blogServiceObj.seedBlogs(req.body);
        return res.status(201).json({
            data:response,
            status:true,
            message:"Seeded posts",
            err:{}

        })

        
        
    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Err while seeding blogs.",
            err:err.message
        })
    }}
module.exports={
    createBlog,
    getBlog,
    getBlogById,
    blogsSeeder
}