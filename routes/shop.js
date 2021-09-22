const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("show", { prods: products, docTitle: "Shop", path: "/" });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
