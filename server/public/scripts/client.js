$(readyNow);

function readyNow(){
    $('#equals').on('click', calculate);
    $('#clear-inputs').on('click', clearInputs);
}

function calculate() {
    let calc = {
        firstValue: $('#first-value').val(),
        secondValue: $('#second-value').val(),
        calculation: $('.selected').attr('id')
    };
}

function clearInputs() {
    $('input').val('');
}

/**
 * Calculation object prototype:
 * { firstValue: x,
 *   secondValue: y, 
 *   calculation: z
 * }
 */