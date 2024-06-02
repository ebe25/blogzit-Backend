const blogRepository=require("../Repository/blogRepository");
const UserRepository=require("../Repository/userRepo");
class blogService{
    constructor(){
        this.blogRepositoryObj=new blogRepository();
        this.UserRepositoryObj=new UserRepository();
    }
    async createBlog(data){
        try{
            const dataToSend=await this.UserRepositoryObj.get(data.userId);
        const newData={
            ...data,
            name:dataToSend.name
        }
            const result=await this.blogRepositoryObj.create(newData);
            return result;


        }
        catch(err){
            return err;

        }
    }
    async getAllBlogs(){
        try{
            const result=await this.blogRepositoryObj.getAllTweet();

            return result;


        }
        catch(err){
            return err;

        }
    }
    async getBlogById(id){
        try{
            
            const result=await this.blogRepositoryObj.get(id);
            console.log("result",result);

            return result;


        }
        catch(err){
            return err;

        }
    }

}
module.exports=blogService;