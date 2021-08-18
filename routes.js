const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>First NodeJs Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><br/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  if (url === "/second") {
    res.write("<html>");
    res.write("<head><title>Second NodeJs Page</title></head>");
    res.write("<body><h1>Second Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};
