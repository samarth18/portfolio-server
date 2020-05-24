const express = require("express");
var cors = require("cors");
const path = require("path");
const mailer = require("./mailer"); // In the top of the file

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // Parse json in request. Available in express 4.16+
app.use(cors());
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

app.post("/api/send_email", function(req, res) {
  res.set("Content-Type", "application/json");

  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  mailer.sendEmail(name, email, subject, message);
  console.log("Email sent successfully!");
  res.send({ sent: true });
});

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

app.listen(PORT, function() {
  console.error(`Listening on port ${PORT}`);
});
