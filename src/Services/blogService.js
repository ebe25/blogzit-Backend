const blogRepository=require("../Repository/blogRepository");
class blogService{
    constructor(){
        this.blogRepositoryObj=new blogRepository();
    }
    async createBlog(data){
        try{
            const result=await this.blogRepositoryObj.create(data);
            return result;


        }
        catch(err){
            return err;

        }
    }

}
module.exports=blogService;