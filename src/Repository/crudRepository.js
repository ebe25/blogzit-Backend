
class CrudRepository{

    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const response=await this.model.create(data);
            return response;

        }
        catch(err){
            throw err;
        }
    }
    async get(id){
        try{
            const response=await this.model.findById(id);
            console.log("response",response);
            return response;

        }
        catch(err){
            throw err;
        }
    }
    async update(id,data){
        try{
            const response=await this.model.findByIdAndUpdate(id,data,{new:true});
            return response;

        }
        catch(err){
            throw err;
        }
    }
    async delete(id){
        try{
            const response=await this.model.findByIdAndDelete(id);
            return response;

        }
        catch(err){
            throw err;
        }
    }
    async getAllTweet(){
        try{
            const response=await this.model.find();
            return response;

        }
        catch(err){
            throw err;
        }

    }




}
module.exports=CrudRepository;