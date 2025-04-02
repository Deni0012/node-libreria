//richieste
const express = require("express")
const bookRouter = require("./routes/bookRoutes.js")
const logger = require("./middlewares/logger.js")
const validateBook = require("./middlewares/validateBook.js")
//app
const app = express()
const port = 5500


//application assets
app.use(express.json())
app.use(logger)
app.use(validateBook)
app.use("/books", bookRouter)




app.listen(port, function () { console.log(`Server Attivo con la porta ${port}`)})