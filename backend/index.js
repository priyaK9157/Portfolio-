const cors = require('cors')
const express = require("express");
const app = express();
app.use(cors({
  origin:true
}))
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const { ContactUsController } = require("./controller/ContactUs");
app.use("/api/v1",ContactUsController)
const port = 4000;
app.listen(port, ()=>{
  console.log("your server is up and running");
})