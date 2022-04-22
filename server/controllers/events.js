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

  const tags = req.body.tags.replace(/\s/g, "").split(",");

  let event = await Event.create({
    ...req.body,
    tags,
    userId: req.user.id,
    imageUrl: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

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
    .populate("eventcategoryId", "title");

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
   const { tags } = req.params;
  const event = await Event.find({ tags: { $all: tags } });
  // .populate("userId")
  // .populate("categoryId");

  if (!event) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    event,
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
