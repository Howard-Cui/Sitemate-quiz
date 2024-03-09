const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = 3000;

app.get("/", (req, res) => {
  const mockJSON = {
    id: "mock id",
    title: "mock title",
    description: "mock description",
  };

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(mockJSON));
});

app.delete("/", (req, res) => {
  console.log("deleting object  => ", req.query.id);
  res.end(JSON.stringify({ message: "successfully deleted" }));
});

app.put("/", (req, res) => {
  console.log("creating object => ", req.body);
  res.end(JSON.stringify({ message: "successfully created" }));
});

app.post("/", (req, res) => {
  console.log("updating object => ", req.body);
  res.end(JSON.stringify({ message: "successfully updated" }));
});

app.listen(PORT, () => {
  console.log(`starting listening at port ${PORT}`);
});
