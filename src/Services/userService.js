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
    async getByEmail(data){
        try{
            const response= await this.userRespository.getWithEmail(data);
            return user;


        }
        catch(err){
            throw err;
        }
    }
    async logIn(data){
        try{
            const user=await this.userRespository.getByEmail({email:data.email});
           
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