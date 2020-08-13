let express = require("express");
let app = express();
let path = require("path");
const hostname = "localhost";
const http = require('http').Server(app);

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiroutes.js")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
