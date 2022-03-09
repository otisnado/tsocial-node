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

module.exports = followsModel;