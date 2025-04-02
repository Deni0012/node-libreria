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
        res.status(404).json({ message: "Libro non trovato" });
    }
}

function store(req, res) {
    const newId = books.length > 0 ? (books[books.length - 1].id + 1) : 1;
    const newBook = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        available: req.body.available
    };

    books.push(newBook);

    console.log(books);

    res.status(201);
    res.json(newBook);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        if (!req.body.title || !req.body.author || !req.body.year || !req.body.available) {
            res.status(404).json({ message: "Dati Non validi" });
        } else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.year = req.body.year;
            book.available = req.body.available;
            res.status(202).json(book)
        }
    } else {
        res.status(404).json({ message: "Libro non trovato" });
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
        res.status(404).json({ message: "Libro non trovato" });
    }
}





module.exports = { index, show, store, update, destroy}

