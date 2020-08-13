let express = require("express");
let app = express();
const http = require('http').Server(app);

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require("./routes/htmlRoutes.js")(app);
// require("./routes/apiroutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
