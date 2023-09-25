const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
require("dotenv");

const PORT = 5050;

const app = express();

app.use("/", postsRoute);
//le altre routes andranno qui sotto

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, `Error during db conn-`));
db.once("open", () => {
	console.log(`Database suxex connected`);
});

app.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
});
