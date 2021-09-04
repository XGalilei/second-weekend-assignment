const express = require('express');

const app = express();
const PORT = 5000;

// Necessary for GET & POST routes
app.use(express.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//Used to run the server
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
});