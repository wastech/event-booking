const express = require("express");
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/eventCategories");

// const Category = require("../models/Category");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(getCategories)
  .post(protect, authorize("admin"), createCategory);

router
  .route("/:id")
  .get(authorize("admin"), getCategory)
  .put(authorize("admin"), updateCategory)
  .delete(authorize("admin"), deleteCategory);

module.exports = router;
