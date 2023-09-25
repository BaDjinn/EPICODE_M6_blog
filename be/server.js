const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");

const PORT = 5050;

const app = express();

app.use("/", postsRoute);
//le altre routes andranno qui sotto

mongoose.connect(
	"mongodb+srv://gsottovia86:7iblDzJg9Del9o0q@epicluster0.hvgd6pb.mongodb.net/",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, `Error during db conn-`));
db.once("open", () => {
	console.log(`Database suxex connected`);
});

app.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
});
