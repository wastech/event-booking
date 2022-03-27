const Event = require("../models/Event");
const APIFeatures = require("../utils/apiFeatures");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const cloudinary = require("../utils/cloudinary");

// Create new event   =>   /api/v1/admin/post/new
exports.createEvent = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "event",
    resource_type: "auto",
  });

  let event = new Event({
    ...req.body,
    userId: req.user.id,
    imageUrl: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  await event.save();

  res.status(200).json({ success: true, data: event });
});

// Get all events   =>   /api/v1/events?keyword=apple
exports.getEvents = asyncHandler(async (req, res, next) => {
  const resPerPage = 30;
  const eventCount = await Event.countDocuments();

  const apiFeatures = new APIFeatures(
    Event.find({})
      .populate("userId", "name avatar")
      .populate("eventcategoryId", "title")
      // .populate("tags")
      .sort("-createdAt "),
    req.query
  )

    .search()
    .filter();
  let events = await apiFeatures.query;
  let filteredPostsCount = events.length;

  apiFeatures.pagination(resPerPage);
  events = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    eventCount,
    resPerPage,
    filteredPostsCount,
    data: events,
  });
});

// Get single post details   =>   /api/v1/post/:id
exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id)
    .populate("userId")
    .populate("eventcategoryId", "title")

  if (!event) {
    return next(new ErrorResponse("post not found", 404));
  }

  res.status(200).json({
    success: true,
    event,
  });
});

// Get  post categories   =>   /api/v1/post/:categoryId
exports.getCategories = asyncHandler(async (req, res, next) => {
  console.log(req.param);

  const categories = await Event.find({
    eventcategoryId: req.params.eventcategoryId,
  })
    .populate("userId")
    .populate("eventcategoryId");

  if (!categories) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    categories,
  });
});

// Get single post details   =>   /api/v1/post/:categoryId
exports.getRelated = asyncHandler(async (req, res, next) => {
  const categories = await Event.find({
    eventcategoryId: req.params.eventcategoryId,
  })
    .populate("userId")
    .populate("eventcategoryId");

  console.log("related", categories);
  if (!categories) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    categories,
  });
});

// Get user post   =>   /api/v1/post/:userId
exports.getUserPosts = asyncHandler(async (req, res, next) => {
  const userPosts = await Event.find({ userId: req.params.userId })
    .populate("userId")
    .populate("categoryId");

  if (!userPosts) {
    return next(new ErrorResponse("userPosts not found", 404));
  }
  res.status(200).json({
    success: true,
    userPosts,
  });
});

// Get single post details   =>   /api/v1/post/:categoryId
exports.getTags = asyncHandler(async (req, res, next) => {
  const tags = await Event.find({ tags: req.params.tagsId })
    .populate("userId")
    .populate("categoryId");

  if (!tags) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    tags,
  });
});

// Update Product   =>   /api/v1/admin/product/:id
// Update Product   =>   /api/v1/admin/product/:id
exports.updateEvent = asyncHandler(async (req, res, next) => {
  let post = await Event.findById(req.params.id);
  await cloudinary.uploader.destroy(post.cloudinary_id);
  // Upload image to cloudinary
  let result;
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path);
  }
  const data = {
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    categoryId: req.body.categoryId,
    imageUrl: result.secure_url,
    cloudinary_id: result.public_id,
  };
  post = await Event.findByIdAndUpdate(req.params.id, data, { new: true });
  res.status(200).json({
    success: true,
    post,
  });
});

// Delete post   =>   /api/v1/admin/post/:id
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const post = await Event.findById(req.params.id);

  await cloudinary.uploader.destroy(post.imageUrl.public_id);
  if (!post) {
    return next(new ErrorResponse("post not found", 404));
  }
  await post.remove();

  res.status(200).json({
    success: true,
    message: "post is deleted.",
  });
});
