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
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },

    // imageUrl: {
    //   type: String,
    //   match: [/^(ftp|http|https):\/\/[^ "]+$/, "Invalid url"], //ftp
    //   default: [
    //     "https://res.cloudinary.com/agustems/image/upload/v1598881434/roomer/no-image_klm" +
    //       "dah.png",
    //   ],
    // },
    // cloudinary_id: {
    //   //image_id
    //   type: String,
    // },
    // views: {
    //   type: Number,
    //   default: 0,
    // },

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

    tags: {
      type: mongoose.Schema.ObjectId,
      ref: "Tag",
    },

    postcategoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "PostCategory",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);
// Cascade delete comments when a post is deleted
PostSchema.pre("remove", async function (next) {
  console.log(`Comment being removed from post ${this._id}`);
  await this.model("Comment").deleteMany({ post: this._id });
  next();
});

// Reverse populate with virtuals
PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});
module.exports = mongoose.model("Post", PostSchema);
