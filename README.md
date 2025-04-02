### Richieste 
- Progetto funzionante
- Collection Postman
- Codice organizzato e leggibile
- README con istruzioni di avvio e test del progetto

### Middleware richiesti 

- Logger: stampa in console metodo e URL per ogni richiesta
- Validazione: blocca POST e PUT se mancano title o author

# Guida Rapida Server Libri

### Avvio
  - npm install 
  - npm install express -y
  - node app.js
  

  - Il server si avvia su: http://127.0.0.1:5500

### Test con Postman
- Usa i seguenti endpoint:

### GET - Visualizza libri
- Tutti: GET http://127.0.0.1:5500/books/
- Singolo: GET http://127.0.0.1:5500/books/{id}

### POST - Aggiungi libro
- URL: POST http://127.0.0.1:5500/books/
- Necessario body con i parametri del oggetto

### PUT - Modifica libro
- URL: PUT http://127.0.0.1:5500/books/{id}
- Stesso formato body del POST

### PATCH - Modifica parziale del libro
- URL: PUT http://127.0.0.1:5500/books/{id}
- Stesso formato body del POST, accetta anche modifiche singole

### DELETE - Elimina libro
- URL: DELETE http://127.0.0.1:5500/books/{id}

- **Nota**: title e author sono campi obbligatori per POST e PUT