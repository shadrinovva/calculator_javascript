let gray_elements = document.querySelectorAll('button.light_gray');
let orange_elements = document.querySelectorAll('button.math');
let dark_elements = document.querySelectorAll('button.dark');

dark_elements.forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#696767';
        setTimeout(() => {
            element.style.backgroundColor = ''; 
        }, 100);
    });
});

gray_elements.forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#ccc7c7';
        setTimeout(() => {
            element.style.backgroundColor = ''; 
        }, 100);
    });
});

let clear_button = document.getElementById('AC');
let inputHolder = document.getElementById('inputHolder');
let plus_minus = document.getElementById('plus_minus');
let percent = document.getElementById('percent');
let point = document.getElementById('point');

inputHolder.value = '0';


clear_button.addEventListener('click', () => {
    inputHolder.value = '0';
    a = 0;
    b = 0; 
    new_value = '';
    orange_elements.forEach(element => {
        element.style.backgroundColor = 'orange';
        element.style.color = 'white';
    })
})

plus_minus.addEventListener('click', () => {
    let value = inputHolder.value;
    if (parseFloat(value) > 0) {
        value = '-' + value;
    } else if (parseFloat(value) === 0) {
        value = 0;
    } else {
        value = value.slice(1);
    }
    inputHolder.value = value;
})

percent.addEventListener('click', () => {
    if (inputHolder.value.length > 0) {
        let value = parseFloat(inputHolder.value);
        value /= 100;
        inputHolder.value = value;
    }
})

point.addEventListener('click', () => {
    if (new_value === '') {
        new_value = inputHolder.value || '0';
    }
    if (!new_value.includes('.')) {
        new_value += '.';
        inputHolder.value = new_value; 
    }
});

let hasStartedInput = false; 
inputHolder.addEventListener('keydown', (event) => {
    if (!hasStartedInput && event.key >= '0' && event.key <= '9') {
        inputHolder.value = '';
        hasStartedInput = true; 
    }
});

inputHolder.addEventListener('input', (event) => {
    let value = event.target.value;
    if (!/^\d*\.?\d*$/.test(value)) {
        event.target.value = value.slice(0, -1); 
    }
});


let numbers = document.querySelectorAll('button.num');


let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let division = document.getElementById('division');

let a = parseFloat(inputHolder.value), b, new_value = '', operation;

plus.addEventListener('click', () => {
    plus.style.backgroundColor = 'white';
    plus.style.color = 'orange';
    multiply.style.backgroundColor = 'orange';
    multiply.style.color = 'white';
    division.style.backgroundColor = 'orange';
    division.style.color = 'white';
    minus.style.backgroundColor = 'orange';
    minus.style.color = 'white';
    a = parseFloat(inputHolder.value);
    new_value = '';
    operation = '+'
});

numbers.forEach(element => {
    element.addEventListener('click', () => {
        new_value += element.textContent;
        inputHolder.value = new_value;
        plus.style.backgroundColor = 'orange';
        plus.style.color = 'white';
        minus.style.backgroundColor = 'orange';
        minus.style.color = 'white';
        multiply.style.backgroundColor = 'orange';
        multiply.style.color = 'white';
        division.style.backgroundColor = 'orange';
        division.style.color = 'white';
        b = parseFloat(new_value);
    })
});

equal.addEventListener('click', () => {
    plus.style.backgroundColor = 'orange';
        plus.style.color = 'white';
        minus.style.backgroundColor = 'orange';
        minus.style.color = 'white';
        multiply.style.backgroundColor = 'orange';
        multiply.style.color = 'white';
        division.style.backgroundColor = 'orange';
        division.style.color = 'white';
    equal.style.backgroundColor = '#f9d08f';
    setTimeout(() => {
        equal.style.backgroundColor = ''; 
    }, 100);

    if (operation === '+') {
        inputHolder.value = (a + b);
    } else if (operation === '-') {
        inputHolder.value = (a - b);
    } else if (operation === '*') {
        inputHolder.value = (a * b);
    } else if (operation === '/') {
        if (b === 0) {
            inputHolder.value = "Ошибка";
        } else {
            inputHolder.value = (a / b);
        }
    }

    new_value = '';
});

minus.addEventListener('click', () => {
    minus.style.backgroundColor = 'white';
    minus.style.color = 'orange';
    multiply.style.backgroundColor = 'orange';
    multiply.style.color = 'white';
    division.style.backgroundColor = 'orange';
    division.style.color = 'white';
    plus.style.backgroundColor = 'orange';
    plus.style.color = 'white';
    a = parseFloat(inputHolder.value);
    new_value = '';
    operation = '-'
});

multiply.addEventListener('click', () => {
    multiply.style.backgroundColor = 'white';
    multiply.style.color = 'orange';
    division.style.backgroundColor = 'orange';
    division.style.color = 'white';
    minus.style.backgroundColor = 'orange';
    minus.style.color = 'white';
    plus.style.backgroundColor = 'orange';
    plus.style.color = 'white';
    a = parseFloat(inputHolder.value);
    new_value = '';
    operation = '*'
});

division.addEventListener('click', () => {
    division.style.backgroundColor = 'white';
    division.style.color = 'orange';
    multiply.style.backgroundColor = 'orange';
    multiply.style.color = 'white';
    minus.style.backgroundColor = 'orange';
    minus.style.color = 'white';
    plus.style.backgroundColor = 'orange';
    plus.style.color = 'white';
    a = parseFloat(inputHolder.value);
    new_value = '';
    operation = '/'
});