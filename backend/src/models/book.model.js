const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
	{
		title: { type: String, require: true },
		author_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
			require: true,
		},
		book_front_image_url: { type: String, require: true },
	},
	{
		versionKey: false, 
		timestamps: true, 
	}
);

const Book= mongoose.model("book", bookSchema);


module.exports = Book;
