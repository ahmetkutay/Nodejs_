const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const pageNotFoundRoutes = require("./routes/pageNotFound");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(pageNotFoundRoutes);

const server = http.createServer(app);

server.listen(8000);
