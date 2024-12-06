// Data
const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController");
const checkId = require("../middlewares/checkId");

// Index
router.get("/", postsController.index);

// Show
router.get("/:id", checkId, postsController.show);

// Create
router.post("/", postsController.store);

// Update
router.put("/:id", checkId, postsController.update);

// Modify
router.patch("/:id", checkId, postsController.modify);

// Destroy
router.delete("/:id", checkId, postsController.destroy);

// Export
module.exports = router;