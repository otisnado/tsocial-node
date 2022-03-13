const dbConnection = require('../db/connection');
const { use } = require('../emojis');

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

const userModel = dbConnection.model("user", userSchema);

async function findAll() {
    const users = await userModel.find({});

    try {
        if (!users) return false;
        return users;
    } catch (error) {
        return error;
    }
}

async function findByUsername(username) {
    try {
        const user = await userModel.find().where('username').equals(username);
        if (!user) return false;
        return user;
    } catch (error) {
        return error;
    }
}

async function findById(userId) {
    try {
        const userById = await userModel.findById(userId);
        if (!userById) return false;
        return userById;
    } catch (error) {
        return error;
    }
}

async function addOne(body) {

    try {
        const user = new userModel(body);
        await user.save();
        return user;
    } catch (error) {
        return error;
    }
}

async function updateOne(userId, body) {
    try {
        const userUpdated = await userModel.findByIdAndUpdate(userId, body);
        await userUpdated.save();
        return userUpdated;
    } catch (error) {
        return error;
    }
}

async function deleteOne(userId) {
    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        return error;
    }
}

module.exports = {
    findAll,
    findByUsername,
    findById,
    addOne,
    updateOne,
    deleteOne,
};