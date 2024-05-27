const mongoose = require("mongoose")


const connectdb = async () => {
    await mongoose.connect("mongodb://localhost:27017/student")
    console.log("Connect to mongodb");
}
module.exports = connectdb;  