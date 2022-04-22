const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};
mongoose.plugin(slug, options);
const EventSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, "Must be three characters long"],
    },

    free_ticket: {
      type: String,
      default: "Free",
    },
    number_of_free_ticket: {
      type: String,
      default: "Free",
    },
    silver_ticket: {
      type: Number,
      default: 0.0,
    },
    gold_ticket: {
      type: Number,
      default: 0.0,
    },

    number_of_silver_ticket: {
      type: Number,
      default: 0.0,
    },
    number_of_gold_ticket: {
      type: Number,
      default: 0.0,
    },

    tags: [{ type: String, required: true }],
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    start_date: { type: Date },
    end_date: { type: Date },
    description: {
      type: String,
      required: [true, "Please enter event description"],
    },
    room: {
      type: String,
      required: [true, "Please enter event description"],
    },
    address: {
      type: String,
      required: [true, "Please enter event address"],
    },
    venue: {
      type: String,
      required: [true, "Please enter event venue"],
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

    numOfReviews: {
      type: Number,
      default: 0,
    },
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

module.exports = mongoose.model("Event", EventSchema);
