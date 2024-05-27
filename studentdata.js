const mongoose = require("mongoose")

let studentSchema = new mongoose.Schema({
    name: String,
    Number: Number,
    course: String
})

const student = mongoose.model("studentdata", studentSchema)

module.exports = student; 

