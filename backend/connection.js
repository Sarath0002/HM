const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
let client = {};
try {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db connected");
} catch {
  console.log(err);
  console.log("error msg");
}
module.exports = client;
