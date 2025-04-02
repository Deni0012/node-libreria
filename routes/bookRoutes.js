const express = require("express");
const router = express.Router();
const booksController = require("../controller/bookController")

// Index
router.get("/", booksController.index)

// Show
router.get("/:id", function (req, res) {
    res.send("Funzione Show")
})

// Store 
router.post("/", function (req, res) {
    res.send("Funzione Store")
})

// Update 
router.put("/:id", function (req, res) {
    res.send("Funzione Update")
})

// Patch 
router.patch("/:id", function (req, res) {
    res.send("Funzione Patch")
})

// Destroy 
router.delete("/:id", function (req, res) {
    res.send("Funzione Destroy")
})

module.exports = router;