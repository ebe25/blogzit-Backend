const user=require("../Models/user");
const CrudRepository=require("./crudRepository");

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }
    

}
module.exports=UserRepository;

