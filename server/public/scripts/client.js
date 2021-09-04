$(readyNow);

const calculations = [];
let operation;

function readyNow(){
    $('#equals').on('click', calculate);
    $('.operation').on('click', selectOperation);
    $('#clear-inputs').on('click', clearInputs);
}

function calculate() {
    let calc = {
        firstValue: $('#first-value').val(),
        secondValue: $('#second-value').val(),
        calculation: operation
    };
    console.log(calc);
    clearInputs();
}

function clearInputs() {
    $('input').val('');
    operation = '';
    $('.operation').css('background-color', 'lightgray');
}

function selectOperation() {
    operation = $(this).attr('id');
    $('.operation').css('background-color', 'lightgray');
    $(this).css('background-color', 'green');
}

/**
 * Calculation object prototype:
 * { firstValue: x,
 *   secondValue: y, 
 *   calculation: z
 * }
 */