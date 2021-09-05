const express = require('express');

const app = express();
const PORT = 5000;

const calculations = [];

// Necessary for GET & POST routes
app.use(express.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//Used to run the server
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
});

app.get('/calculate', (req, res) => {
    res.send(calculations[calculations.length-1]);
});

app.post('/calculate', (req, res) => {
    let newCalc = req.body;
    calculate(newCalc);
    calculations.push(newCalc);
});

app.get('/history', (req, res) => {
    res.send(calculations);
});

function calculate(obj) {
    //parseInt only necessary for 'plus' operation, but added to the other
    //three functions for clarity
    if(obj.operation === 'plus') {
        obj.result = parseInt(obj.first) + parseInt(obj.second);
        obj.operation = '+';
    }
    else if(obj.operation === 'minus') {
        obj.result = parseInt(obj.first) - parseInt(obj.second);
        obj.operation = '-';
    }
    else if(obj.operation === 'times') {
        obj.result = parseInt(obj.first) * parseInt(obj.second);
        obj.operation = '*';
    }
    else if(obj.operation === 'divided-by') {
        obj.result = parseInt(obj.first) / parseInt(obj.second);
        obj.operation = '/';
    }
}

/**
 * Object template:
 * 
 * firstValue: 
 * secondValue: 
 * operation: 
 * result: (initially null)
 */