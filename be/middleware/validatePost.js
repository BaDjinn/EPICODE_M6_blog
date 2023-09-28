const validatePost = (req, res, next) => {
	const errors = [];
	const { title, category, cover, price, rate, author } = req.body;

	if (typeof title != "string") {
		errors.push("Title must be a string");
	}
	if (typeof category != "string") {
		errors.push("Category must be a string");
	}
	if (typeof cover != "string") {
		errors.push("Cover must be a string");
	}
	if (typeof price != "string") {
		errors.push("Price must be a string");
	}
	if (typeof rate != "string") {
		errors.push("Rate must be a string");
	}
	if (typeof author != "string") {
		errors.push("Author must be a string");
	}
	if (errors > 0) {
		res.status(400).send({ errors });
	} else {
		next();
	}
};
