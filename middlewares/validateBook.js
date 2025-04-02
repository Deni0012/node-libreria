const validateBook = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {

        const title = req.body.title
        const author = req.body.author
        if (!title || !author) {
            return res.status(400).json({
                error: true,
                message: 'I campi title e author sono obbligatori'
            });
        }
    }
    next();
};

module.exports = validateBook