const books = require('../data/books.json')

function index(req, res) {
    res.json(books);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex >= 0) {
        books.splice(bookIndex, 1);
        console.log(books)
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
}





module.exports = { index, show, destroy}

