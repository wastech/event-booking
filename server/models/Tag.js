const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const TagSchema = new Schema(
  {
    title:{
      type: Array,
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

TagSchema.plugin(uniqueValidator, {
  message: "{PATH} already exists.",
});

module.exports = mongoose.model("Tag", TagSchema);
