const user=require("../Models/user");
const CrudRepository=require("./crudRepository");

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }
    async getByEmail(data){
        try{
            const response=await user.findOne(data);
            return response;

        }
        catch(err){
            throw err;
        }
    }

}
module.exports=UserRepository;

