const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://mongo:27017/devops_demo")

app.use("/api", require("./routes/api"))

app.listen(5000, () => {
    console.log("Backend running on port 5000")
})