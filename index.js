const express = require("express");
const app = express();
const router = require('./routes/web');

app.set("view engine","ejs")
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false})) //parse url encoded data
app.use(express.json()) //parse json encoded data\
app.use(express.static("public"))
 
app.use("", router);

app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
  }
  console.log(`http://localhost:${port}`);
});

/**
 *  Database connection
 */

const mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = 'mongodb://localhost:27017/no_accident';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

