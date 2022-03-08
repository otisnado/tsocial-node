const db = require("mongoose");

db.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true
    }
    );

db.connection.on("error", console.error.bind(console, "connection error: "));
db.connection.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;