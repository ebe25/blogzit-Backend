const blog=require("../Models/Blog");
const crudRepository=require("./crudRepository");
class blogRepository extends crudRepository{
    constructor(){
        super(blog);
    }
    async getByUserId(datas){
        try{
            const data=await blog.findOne(datas);
            return data;

        }
        catch(err){
            return err;
        }
    }
}
module.exports=blogRepository;