var express = require("express");
var app = express();
const { auth } = require("express-openid-connect");
var indexRouter = require("./routes/index.js");

require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
  clientSecret: process.env.CLIENTSECRET,
};

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(auth(config));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Express is running on port 3000");
});
