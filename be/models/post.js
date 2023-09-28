const mongoose = require(`mongoose`);

const PostsScheme = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		category: {
			type: String,
			required: false,
			default: "General",
		},

		cover: {
			type: String,
			required: false,
			default: "NULL",
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		rate: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true, strict: true }
);

module.exports = mongoose.model(`PostModel`, PostsScheme, `posts`);
