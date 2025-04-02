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
router.put("/:id", function (req, res) {
    res.send("Funzione Update")
})

// Patch 
router.patch("/:id", function (req, res) {
    res.send("Funzione Patch")
})

// Destroy 
router.delete("/:id", booksController.destroy)

module.exports = router;