import express from "express";
import request from "request";

const app = express();
// const router = express.Router();

const upDown = (req, res) => {
  const {
    query: { url }
  } = req;
  console.log(url);

  if (url) {
    if (!/^https?:\/\//i.test(url)) {
      var newUrl = "http://" + url;
    }
    request(newUrl, function (error, response, body) {
      if (!error && response.statusCode <= 445) {
        res.send("/", "Up!");
      } else {
        res.send("/", "Down!");
      }
    });
  } else {
    res.send("/", "write URL using by ?url=...");
  }
};

app.get("/", upDown);
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
