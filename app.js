//richieste
const express = require("express")
const bookRouter = require("./routes/bookRoutes.js")
//app
const app = express()
const port = 5500


app.use("/books", bookRouter)



app.listen(port, function () { console.log(`Server Attivo con la porta ${port}`)})