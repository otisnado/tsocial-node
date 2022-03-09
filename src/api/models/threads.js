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

module.exports = threadsModel;