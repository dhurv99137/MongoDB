const express = require("express")
const connectdb = require('./db');
const student = require('./studentdata');


const app = express();
app.use(express.json());


app.get("/", async (req, res) => {
    let stu = await student.find()
    res.send(stu)
});

// id to search 

app.get("/:id", async (req, res) => {
    let { id } = req.params
    let stu = await student.findById(id)
    res.send(stu)
})

app.post("/", async (req, res) => {
    let stu = await student.create(req.body);
    res.send(stu)
});

app.patch("/:id", async (req, res) => {
    let { id } = req.params
    await student.findByIdAndUpdate(id, req.body)
    res.send("audate")
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params

    await student.findByIdAndDelete(id)
    res.send("delete")
})

app.listen(8090, () => {
    console.log("server in runing up to 8090 ");
    connectdb()
});