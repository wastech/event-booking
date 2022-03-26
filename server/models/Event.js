const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};
mongoose.plugin(slug, options);
const PostSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, "Must be three characters long"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Product name cannot exceed 5 characters"],
      default: 0.0,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please enter event description"],
      
    },

    
    imageUrl: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    tags: [{ type: String }],

    eventcategoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "EventCategory",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
