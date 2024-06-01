const blog=require("../Models/Blog");
const crudRepository=require("./crudRepository");
class blogRepository extends crudRepository{
    constructor(){
        super(blog);
    }
}
module.exports=blogRepository;