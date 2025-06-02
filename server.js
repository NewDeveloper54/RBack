const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose= require("mongoose");
const cors = require("cors");
require("dotenv").config();



app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("didn't connect to MongoDB", error);
})


app.use(cors());

const participantRoute = require("./routes/participantRoutes");
app.use("/api/participants", participantRoute);




app.get("/", (req, res)=>{
    res.send("hello from express");
})


app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})


