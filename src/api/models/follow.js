const dbConnection = require('../db/connection');

const followsSchema = new dbConnection.Schema({
    userId: {
        type: String,
        require: true
    },
    following: {
        type: String,
        require: false
    }
});

const followsModel = dbConnection.model("follows", followsSchema)

async function getFollowers(userId){
    const followers = await followsModel.find().where('following').equals(userId);

    try {
        if(!followers) return false;
        return followers;
    } catch (error) {
        return error;
    }
}

async function getFollowing(userId){
    const following = await followsModel.find().where('userId').equals(userId);

    try {
        if(!following) return false;
        return following;
    } catch (error) {
        return error;
    }
    
}

async function addFollow(following){
    const followerAdded = new followsModel(following);
  
    try {
      await followerAdded.save();
      return followerAdded;
    } catch (error) {
      error
    }
}

async function deleteFollow(body){
    try {
        const unfollow = await followsModel.findOneAndDelete({"userId": body.userId}).where("following").equals(body.unfollow);
    
        if(!unfollow) return false;
        return unfollow;
      } catch (error) {
        return error;
      }
}

module.exports = {
    getFollowing,
    getFollowers,
    addFollow,
    deleteFollow

};