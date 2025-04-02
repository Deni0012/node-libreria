const books = require('../data/books.json')


//index
function index(req, res) {
    let filterdBooks = books;

    if (req.query.author) {
        // Assumiamo che req.query.author sia una singola stringa
        const queryAuthor = req.query.author.toLowerCase().replace(/\s/g, '+');

        filterdBooks = books.filter(book => {
            // Assumiamo che book.author sia una singola stringa
            const bookAuthor = book.author.toLowerCase().replace(/\s/g, '+');

            // Verifichiamo se l'autore richiesto è incluso nell'autore del libro
            return bookAuthor.includes(queryAuthor) || queryAuthor.includes(bookAuthor);
        });
    }

    res.json(filterdBooks);
}

//show
function show(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Libro non trovato" });
    }
}

//store
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

//update
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


//patch
function patch(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        if (req.body.title && req.body.title != book.title) {
            book.title = req.body.title;
        }
        if (req.body.author && req.body.author != book.author) {
            book.author = req.body.author;
        }
        if (req.body.year && req.body.year != book.year) {
            book.year = req.body.year;
        }
        if (req.body.available && req.body.available !== book.available) {
            book.available = req.body.available
        }
        res.status(202).json(book)
    } else {
        res.status(404).json({ message: "Libro non trovato" });
    }
}

//destroy
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




//modulo di esportazione
module.exports = { index, show, store, update, patch, destroy}

