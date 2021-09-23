const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.use((req, res, next) => {
  res.status(404).render("pageNotFound", { docTitle: "Page Not Found" });
  //res.status(404).sendFile(path.join(rootDir, "views", "pageNotFound.html"));
});

module.exports = router;
