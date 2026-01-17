const express = require("express");
const route = express.Router();
const expenseController = require("../controller/expenseController");
const userController = require("../controller/signloginController");

// expense routes
route.post("/add",expenseController.addExpense);
route.delete("/delete/:id",expenseController.deleteExpense);
route.get("/getAll",expenseController.getExpense);

module.exports = route;