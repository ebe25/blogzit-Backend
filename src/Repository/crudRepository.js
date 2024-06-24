class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async seed(data) {
    try {
      const response = await this.model.insertMany(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async getByAttribute(attribute) {
    //think to make this more extendible
    try {
      const response =  await this.model.findOne({email: attribute})
      return response
    } catch (err) {
      throw err;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (err) {
      throw err;
    }
  }
  async delete(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (err) {
      throw err;
    }
  }
  async getAllTweet() {
    try {
      const response = await this.model.find();
      return response;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = CrudRepository;
