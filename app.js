const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const pageNotFoundRoutes = require("./routes/pageNotFound");
const path = require("path");
const expressHbs = require("express-handlebars");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layout/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes.routes);
app.use(shopRoutes);
app.use(pageNotFoundRoutes);

const server = http.createServer(app);

server.listen(8000);
