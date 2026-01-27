process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT:", err.stack);
});

require('dotenv').config()
const express = require("express");
const db = require("./utils/db-connection");
const expenseRoute = require("./routes/expenseRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/PaymentRoutes");
const forgotPassRoute = require("./routes/forgotRoute");



// const Payment = require("./models/payment");

const app = express();
const cors = require('cors');

// models
require("./models");

app.use(express.json())
app.use(cors());

console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY, typeof process.env.BREVO_API_KEY);

console.log(
  process.env.NODE_ENV,
  typeof process.env.NODE_ENV
);


app.use(express.static('public'));


// routes 
app.use("/user", userRoutes);
app.use("/expense", expenseRoute)
app.use("/password",forgotPassRoute)
app.use("/", paymentRoutes);



db.sync().then(() => {
    app.listen(8000, () => {
        console.log("server is runnig");
    })
}).catch((error) => {
    console.log(error.message);
})
