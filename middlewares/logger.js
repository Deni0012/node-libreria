//Creiamo un middleware con una funzione che richiede un metodo e un url
function logger(req, res, next) {
    console.log(`Il metodo della richiesta è: ${req.method} e invece l'url:${req.url}`);

    next()
}

module.exports = logger