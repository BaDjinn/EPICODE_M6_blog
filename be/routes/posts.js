const express = require("express");
const posts = express.Router();

posts.get(`/posts`, (req, res) => {
	res.send({
		author: "Giulio Sottovia",
		job: "Engineer",
	});
});

/* post.post("/posts/create", (req, res) => {});

post.patch("/posts/create", (req, res) => {});

post.delete("/posts/create", (req, res) => {}); */

module.exports = posts;
