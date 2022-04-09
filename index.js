const express = require("express");
const app = express();

app.set("view engine","ejs")
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false})) //parse url encoded data
app.use(express.json()) //parse json encoded data
 
app.get("/", (req, resp) => {
     resp.render("index")
});

app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
  }
  console.log(`http://localhost:${port}`);
});
