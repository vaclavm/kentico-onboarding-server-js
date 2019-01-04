const createHandler = require("azure-function-express").createHandler;
const express = require("express");
 
// Create express app as usual
const app = express();

app.get("/api/items/:id", (req, res) => {
    res.json({
        type: 'GET_ONE',
        id: req.params.id
    });
});


app.get("/api/items", (req, res) => {
    res.json({
        type: 'GET_ALL',
    });
});
 
// Binds the express app to an Azure Function handler
module.exports = createHandler(app);