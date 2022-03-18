const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    body: {
      type: String,
      minlength: [4, "Body must be at 4 characters long"],
      required: [true, "Please add body"],
    },
    postId: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
