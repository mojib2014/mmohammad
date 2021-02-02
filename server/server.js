const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const querystring = require("querystring");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.post("/sendemail", (req, res) => {
  const name = req.body.name;
  const from = req.body.email;
  const message = req.body.message;

  const result = sendElasticEmail(
    from,
    name,
    "mmohammad3@outlook.com",
    "From my website(Portfolio)",
    message,
    message,
  );
  res.send(result);
});

function sendElasticEmail(from, fromname, to, subject, body_html, body_text) {
  // Make sure to add your username and api_key below.
  var post_data = querystring.stringify({
    username: "ahmad.sahil2000@gmail.com",
    api_key:
      "6F504F4855803924261A29DA2FF5B09ACC067B59157695C605D6010901EF33E9D0C1E306A6E267E7BCA31455F1B98A19",
    from,
    fromname,
    to,
    subject,
    body_html,
    body_text,
  });

  // Object of options.
  var post_options = {
    host: "api.elasticemail.com",
    path: "/mailer/send",
    port: "443",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": post_data.length,
    },
  };
  var result = "";
  // Create the request object.
  var post_req = https.request(post_options, function (res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
      result = chunk;
    });
    res.on("error", function (e) {
      result = "Error: " + e.message;
    });
  });

  // Post to Elastic Email
  post_req.write(post_data);
  post_req.end();
  return result;
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
