const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Comment = require('../models/Comment')
const Post = require('../models/Post')

// @desc    Get comments by post
// @route   GET /api/v1/posts/:id/comments
// @access  Public
// exports.getComments = asyncHandler(async (req, res, next) => {
//   const { id } = req.params
//   const post = await Post.findById(id)
//   if (!post)
//     return next(new ErrorResponse(`Post not found with id of ${id}`, 404))

//   const comments = await Comment.find({ post: id })

//   res.status(200).json({ success: true, data: comments })
// })
// @desc    Get comments by video id
// @route   GET /api/v1/comments/:videoId/videos
// @access  Public
exports.getCommentByPostId = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ postId: req.params.postId })
    .populate("userId")
    .sort("-createdAt");

  if (!comments) {
    return next(
      new ErrorResponse(`No comment with that Post id of ${req.params.postId}`)
    );
  }

  res.status(200).json({ sucess: true, data: comments });
});
// @desc    Create comment
// @route   POST /api/v1/posts/:id/comments
// @access  Public
exports.createComment = asyncHandler(async (req, res, next) => {
//   const { id } = req.params

  const post = await Post.findById({ _id: req.body.postId });
  if (!post)
    return next(new ErrorResponse(`Post not found with id of ${req.body.videoId}`, 404))

  const comment = await Comment.create({
    ...req.body,
    userId: req.user._id,
  });

  res.status(201).json({ success: true, data: comment })
})

// @desc    Delete Comment
// @route   DELETE /api/v1/comments/:id
// @access  Private (admin)
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const id = req.params.id

  const comment = await Comment.findByIdAndDelete(id)

  if (!comment) {
    return next(new ErrorResponse(`Comment with id ${id} not found`, 404))
  }

  res.status(200).json({ success: true, data: {} })
})