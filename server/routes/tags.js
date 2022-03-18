const express = require("express");
const {
  getTags,
  getTag,
  createTag,

  updateTag,
  deleteTag,
} = require("../controllers/tag");


// const Category = require("../models/Category");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router.use(protect);

router.route("/").get(getTags).post(authorize("admin"), createTag);

router
  .route("/:id")
  .get(authorize("admin"), getTag)
  .put(authorize("admin"), updateTag)
  .delete(authorize("admin"), deleteTag);


module.exports = router;
