const books = require('../data/books.json')

function index(req, res) {
    res.json(books);
}





module.exports = { index }

