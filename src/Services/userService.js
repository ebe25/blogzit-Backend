const UserRepository=require("../Repository/userRepo");
class userService{
    constructor(){
        this.userRespository=new UserRepository();
    }
    async signup(data){
        try{
            const user=await this.userRespository.create(data);
            return user;
        }
        catch(err){
            throw err;
        }
    }
    async getByEmail(email){
        try{
            const response= await this.userRespository.getByAttribute(email);
            return response;


        }
        catch(err){
            throw err;
        }
    }
    async logIn(data){
        try{
            const user=await this.userRespository.getByAttribute(data.email);
            if(!user){
                throw new Error("User not present in the database");
            }
            
            const userVerify=user.verifyPassword(data.password);
          
            if(!userVerify){
                throw new Error("password not correct");
            }
            const token=user.generateToken();
            return token;
        }
        catch(err){
            console.log(err);
            throw err;

        }
    }
}
module.exports=userService;