let path = require("path");
let express = require("express");


module.exports = function(app) {
	app.get("/", function(req, res) {
        db.Posts.findAll();
			res.sendFile(path.join(__dirname, "../index.html"));
})
}
