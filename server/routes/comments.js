const express = require("express");
const { protect, authorize } = require("../middleware/auth");
const {
  getCommentByPostId,
  createComment,
  deleteComment,
} = require("../controllers/comments");

const Comment = require("../models/Comment");

const advancedResults = require("../middleware/advancedResults");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(advancedResults(Comment), getCommentByPostId)
  .post(protect, createComment);

router.route("/:postId/comments").get(getCommentByPostId);
router.route("/:id").delete(protect, authorize("admin"), deleteComment);

module.exports = router;
