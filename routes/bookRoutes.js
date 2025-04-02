const express = require("express");
const router = express.Router();
const booksController = require("../controller/bookController")

// Index
router.get("/", booksController.index)
router.get("/books/available", function(req, res){
    const availableBooks = books.filter(book => book.available === true)
    res.json(availableBooks);
    app.get('/books/available', getAvailableBooks);
})

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