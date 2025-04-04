const express = require("express");
const router = express.Router();
const booksController = require("../controller/bookController")

// Index
router.get("/", booksController.index)


// Show
router.get("/:id", booksController.show)

// Store 
router.post("/", booksController.store)

// Update 
router.put("/:id", booksController.update)

// Patch 
router.patch("/:id", booksController.patch)

// Destroy 
router.delete("/:id", booksController.destroy)

module.exports = router;