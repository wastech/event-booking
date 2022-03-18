const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Tag = require("../models/Tag");

// @desc    Get categories
// @route   GET /api/v1/categories
// @access  Private/Admin
exports.getTags = asyncHandler(async (req, res, next) => {
  let tags = await Tag.find({}).populate("userId", "name").exec();
  res.status(200).json({
    data: tags,
  });
});

// @desc    Get single category
// @route   GET /api/v1/categories/:id
// @access  Private/Admin
exports.getTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.findById(req.params.id);

  if (!tag) {
    return next(
      new ErrorResponse(`No category with that id of ${req.params.id}`)
    );
  }

  res.status(200).json({ sucess: true, data: tag });
});

// @desc    Create Category
// @route   POST /api/v1/categories/
// @access  Private/Admin
exports.createTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.create({
    ...req.body,
    userId: req.user.id,
  });

  return res.status(200).json({ sucess: true, data: tag });
});

// @desc    Update category
// @route   PUT /api/v1/categories
// @access  Private/Admin
exports.updateTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  });

  if (!tag)
    return next(
      new ErrorResponse(`No category with that id of ${req.params.id}`)
    );

  res.status(200).json({ success: true, data: tag });
});

// @desc    Delete Category
// @route   DELETE /api/v1/categories/:id
// @access  Private/Admin
exports.deleteTag = asyncHandler(async (req, res, next) => {
  let tag = await Tag.findById(req.params.id);

  if (!tag) {
    return next(
      new ErrorResponse(`No category with id of ${req.params.id}`, 404)
    );
  }

  await tag.remove();

  return res.status(200).json({ success: true, tag });
});
