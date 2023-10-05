require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const logger = require("../be/middleware/logger");
const routesUser = require("./routes/routesUser");

const app = express();

app.use(logger);
app.use(express.json);
app.use("/", postsRoute);
//le altre routes andranno qui sotto
app.use("/", routesUser);
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, `Error during db conn-`));
db.once("open", () => {
	console.log(`Database suxex connected`);
});

app.listen(process.env.PORT, () => {
	console.log(`Server up and running on port ${process.env.PORT}`);
});
