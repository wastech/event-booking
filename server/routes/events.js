const express = require("express");
// const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getCategories,
  getTags,
  getRelated,
  getUserPosts,
} = require("../controllers/events");



const router = express.Router({ mergeParams: true });

// const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(getEvents)
  .post(protect, authorize("admin"), upload.single("imageUrl"), createEvent);

router
  .route("/:id")
  .get(getEvent)
  .put(protect, authorize("admin"), upload.single("imageUrl"), updateEvent)
  .delete(protect, authorize("admin"), deleteEvent);

// router
//   .route("/:slug")
//   .get(getPost)

router.route("/category/:eventcategoryId").get(getCategories);
router.route("/related/:eventcategoryId").get(getRelated);
router.route("/userpost/:userId").get(getUserPosts);
router.route("/tags/:tagsId").get(getTags);

module.exports = router;
