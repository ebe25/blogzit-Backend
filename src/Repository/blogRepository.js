const Blog=require("../Models/blog");
const crudRepository=require("./crudRepository");
class blogRepository extends crudRepository{
    constructor(){
        super(Blog);
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