const express = require("express");
const db = require("./utils/db-connection");
const expenseRoute = require("./routes/expenseRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
const cors = require('cors');

// models

app.use(express.json())
app.use(cors());

require("./models/expenseModel");
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.use("/user",userRoutes);
app.use("/expense",expenseRoute)

db.sync().then(()=>{
     app.listen(8000,()=>{
    console.log("server is runnig");
})
}).catch((error)=>{
    console.log(error.message);
})
