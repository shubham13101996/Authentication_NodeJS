// require('dotenv').config()
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/Authentication-Nodejs", {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb =>> Authentication-Nodejs"))
    .catch((e) => console.log("Not Connect Mongodb"));
};
