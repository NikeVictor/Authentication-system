const express = require('express')
const { json } = require("express");
require('dotenv').config()
const routes = require('./routers/userRoute');
const connectDB = require('./db/connect')

app = express();
app.use(json())
app.use(routes);

const port = 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
      console.log(error)
    }
  }

start();