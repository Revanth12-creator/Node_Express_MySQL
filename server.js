const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//import body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importing connection
const connection = require("./config/connection");

//importing route
const EmployeeRoute = require("./routes/employee_route");

//connect route to app
app.use("/employee", EmployeeRoute);
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`server running on`, PORT);
});
