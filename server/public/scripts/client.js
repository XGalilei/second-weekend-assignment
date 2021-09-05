$(readyNow);

const calculations = [];
let operator;

function readyNow(){
    $('#equals').on('click', calculate);
    $('.operation').on('click', selectOperation);
    $('#clear-inputs').on('click', clearInputs);
}

function calculate() {
    let calc = {
        first: $('#first-value').val(),
        second: $('#second-value').val(),
        operation: operator
    };

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: calc
    });

    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(appendResults).catch(displayError);

    console.log(calc);
    clearInputs();
}

function clearInputs() {
    $('input').val('');
    operator = '';
    $('.operation').css('background-color', 'lightgray');
}

function selectOperation() {
    operator = $(this).attr('id');
    console.log($(this).attr('id'));
    $('.operation').css('background-color', 'lightgray');
    $(this).css('background-color', 'green');
}

function appendHistory(history) {
    $('#history').empty();
    for(let i = history.length - 1; i>=0; i--) {
        $('#history').append(calcString(history[i]));
    }
}

function appendResults(calc) {
    $('#last-calc').empty();
    $('#last-calc').append(calc.result);

    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(appendHistory).catch(displayError);
}

function displayError(error) {
    console.error('Error:', error);
}

function calcString(calculation){
    return `${calculation.first} ${calculation.operation} ${calculation.second} = ${calculation.result}</br>`;
}

/**
 * Calculation object prototype:
 * { firstValue: x,
 *   secondValue: y, 
 *   calculation: z
 * }
 */