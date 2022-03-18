const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const EventCategorySchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, "Title must be three characters long"],
      trim: true,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, "Title is required"],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

PostCategorySchema.plugin(uniqueValidator, {
  message: "{PATH} already exists.",
});

module.exports = mongoose.model("EventCategory", EventCategorySchema);
