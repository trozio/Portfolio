let express = require("express");
let app = express();
let path = require("path");
const hostname = "localhost";
const http = require('http').Server(app);
let axios = require ("axios");
const nodemailer = require('nodemailer');

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiroutes.js")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/mail", function(req, res){
  console.log(req.body);
  sendMail(req.body)
  res.send("hello")
})

function sendMail(mail){
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'daniel.l.adelman@gmail.com',
      pass: 'pr1ngad9'
    }
  });

  let mailOptions = {
    from: 'daniel.l.adelman@gmail.com',
    to: 'daniel.l.adelman@gmail.com',
    subject: 'New Client',
    text: mail
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
