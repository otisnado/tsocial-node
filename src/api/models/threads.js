const dbConnection = require('../db/connection');

const threadsSchema = new dbConnection.Schema({
    content: {
        type: String,
        require: true
    },
    images: {
        type: Array,
        require: false
    },
    likes: {
        type: Number,
        require: false,
    },
    comments: {
        type: String,
        require: false
    },
    userId: {
        type: String,
        require: true
    },
    sharedBy: {
        type: Array,
        required: false
    }
    
});

const threadsModel = dbConnection.model("threads", threadsSchema)

async function getAll(){
    const threads = await threadsModel.find({});
  
    try {
        if(!threads) return false;
        return threads;
    } catch (error) {
        return error;
    }
}

async function getThreadById(threadId){
    const thread = await threadsModel.findById(threadId);

    try {
      if(!thread) return false;
      return thread;
    } catch (error) {
      return error;
    }
}

async function getMyThreads(userId){
    const userThreads = await threadsModel.find().where('userId').equals(userId);

    try {
      if(!userThreads) return false;
      return userThreads;
    } catch (error) {
      return error;
    }
}

async function getUserThreads(userId){
    const userThreads = await threadsModel.find().where('userId').equals(userId);

    try {
      if(!userThreads) return false;
      return userThreads;
    } catch (error) {
      return error;
    }
}

async function addThread(body){
    const thread = new threadsModel(body);
  
    try {
      await thread.save();
      return thread;
    } catch (error) {
      return error;
    }
}

async function updateThread(threadId, body){
    try {
        const thread = await threadsModel.findByIdAndUpdate(threadId, body).where("userId").equals(body.userId);
        await thread.save();
        return thread;
      } catch (error) {
        return error;
      }
}

async function deleteThread(threadId, userId){
    try {
        const thread = await threadsModel.findByIdAndDelete(threadId).where("userId").equals(userId);
        if(!thread) return false;
        return thread;
      } catch (error) {
        return error;
      }
}

module.exports = {
    getAll,
    getThreadById,
    getMyThreads,
    getUserThreads,
    addThread,
    updateThread,
    deleteThread
};