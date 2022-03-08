const dbConnection = require('../db/connection');

const userSchema = new dbConnection.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    
});

const userModel = dbConnection.model("user", userSchema)

module.exports = userModel;