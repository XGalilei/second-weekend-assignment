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
    calculations.push(req.body);
});

app.get('/history', (req, res) => {
    res.send(calculations);
});

function calculate(obj) {
    if(obj.operation === 'add') {
        obj.result = obj.first + obj.second;
    }
    else if(obj.operation === 'subtract') {
        obj.result = obj.first - obj.second;
    }
    else if(obj.operation === 'multiply') {
        obj.result = obj.first * obj.second;
    }
    else if(obj.operation === 'divide') {
        obj.result = obj.first / obj.second;
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