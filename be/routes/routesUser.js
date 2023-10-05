const express = require("express");
const UserModel = require("../models/users");
const user = express.Router();
const logger = require("../middleware/logger");

user.get(`/user`, logger, async (req, res) => {
	try {
		const user = await UserModel.find();
		res.status(200).send({
			statusCode: 200,
			user,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

user.post("/user/create", logger, async (req, res) => {
	const newUser = new UserModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		role: req.body.role,
	});

	try {
		const user = await newUser.save();

		res.status(200).send({
			statusCode: 200,
			payload: newUser,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno del server",
		});
	}
});

module.exports = user;
