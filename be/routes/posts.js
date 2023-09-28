const express = require("express");
const PostModel = require("../models/post");
const posts = express.Router();

posts.get(`/posts`, async (req, res) => {
	try {
		const posts = await PostModel.find();

		res.status(200).send({
			statusCode: 200,
			posts,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

posts.post("/posts/create", async (req, res) => {
	const newPost = new PostModel({
		title: req.body.title,
		category: req.body.category,
	});

	try {
		const post = await newPost.save();
		res.status(201).send({
			statusCode: 201,
			payload: newPost,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

posts.patch("/posts/update", async (req, res) => {
	const { postId } = req.params;
	const postExist = await PostModel.findById(postId);

	if (!postExist) {
		return res.status(404).send({
			statusCode: 404,
			message: "Il post non esiste",
		});
	}

	try {
		const dataToUpdate = req.body;
		const options = { new: true };
		const result = await PostModel.findByIdAndUpdate(
			postId,
			dataToUpdate,
			options
		);

		res.status(200).send({
			statusCode: 200,
			message: "post modded",
			result,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

/* posts.delete("/posts/delete", async (req, res) => {}); */

module.exports = posts;
