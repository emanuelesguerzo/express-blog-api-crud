const express = require("express");
const router = express.Router();
const postsData = require("../data/posts");
const postsController = require("../controller/postsController");

// Index
router.get("/", postsController.index);

// Show
router.get("/:id", postsController.show);

// Create
router.post("/", postsController.create);

// Update
router.put("/:id", postsController.update);

// Modify
router.patch("/:id", postsController.modify);

// Destroy
router.delete("/:id", postsController.destroy);

// Export
module.exports = router;