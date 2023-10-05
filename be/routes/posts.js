const express = require("express");
const PostModel = require("../models/post");
const posts = express.Router();
const validatePost = require("../middleware/validatePost");

posts.get(`/posts`, validatePost, async (req, res) => {
	const { page = 1, pageSize = 3 } = req.query;
	try {
		const posts = await PostModel.find()
			.limit(pageSize)
			.skip((page - 1) * pageSize);

		const totalPost = await PostModel.count();

		res.status(200).send({
			statusCode: 200,
			currentPage: Number(page),
			totalPages: Math.cell(totalPosts / pagesize),
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

posts.patch("/posts/update/:postId", async (req, res) => {
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

posts.delete("/posts/delete/:postId", async (req, res) => {
	const { postId } = req.params;
	const postExist = await Post.Model.findById(postId);

	if (!postExist) {
		return res
			.status(404)
			.send({ statusCode: 404, message: "Il post non esiste" });
	}

	try {
		const result = await PostModel.findByIdAndDelete(postId);
		res.status(200).send({
			statusCode: 200,
			message: `Post ${postId} cancellato`,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

module.exports = posts;
