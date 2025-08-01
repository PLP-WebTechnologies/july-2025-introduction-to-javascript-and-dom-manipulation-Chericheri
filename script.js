// ==============================================
// Part 1: JavaScript Basics - Variables, Conditionals
// ==============================================

// Age Checker - Demonstrates variables and conditionals
document.getElementById('checkAgeBtn').addEventListener('click', function() {
    // Get user input
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    const resultElement = document.getElementById('ageResult');
    
    // Validate input
    if (isNaN(age)) {
        resultElement.textContent = 'Please enter a valid age.';
        resultElement.style.color = 'red';
        return;
    }
    
    // Determine message based on age
    let message;
    if (age < 0) {
        message = 'You entered an invalid age.';
    } else if (age < 13) {
        message = 'You are a child.';
    } else if (age < 18) {
        message = 'You are a teenager.';
    } else if (age < 65) {
        message = 'You are an adult.';
    } else {
        message = 'You are a senior citizen.';
    }
    
    // Display result
    resultElement.textContent = message;
    resultElement.style.color = 'green';
});

// ==============================================
// Part 2: JavaScript Functions - Reusable blocks of code
// ==============================================

// Temperature Conversion Functions
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Temperature Converter Event Listeners
document.getElementById('toCelsiusBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('temp');
    const temp = parseFloat(tempInput.value);
    const resultElement = document.getElementById('tempResult');
    
    if (isNaN(temp)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }
    
    const celsius = toCelsius(temp);
    resultElement.textContent = `${temp}°F is ${celsius.toFixed(1)}°C`;
});

document.getElementById('toFahrenheitBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('temp');
    const temp = parseFloat(tempInput.value);
    const resultElement = document.getElementById('tempResult');
    
    if (isNaN(temp)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }
    
    const fahrenheit = toFahrenheit(temp);
    resultElement.textContent = `${temp}°C is ${fahrenheit.toFixed(1)}°F`;
});

// String Formatting Function
function formatString(input) {
    // Trim whitespace and capitalize first letter
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';
    
    // Capitalize first letter and lowercase the rest
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

// String Formatter Event Listener
document.getElementById('formatBtn').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('stringResult');
    
    const formattedString = formatString(inputString);
    resultElement.textContent = formattedString || 'Please enter some text.';
});

// ==============================================
// Part 3: JavaScript Loops - Repetition and iteration
// ==============================================

// Multiplication Table - Demonstrates for loop
document.getElementById('generateTableBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('multNumber').value);
    const tableContainer = document.getElementById('multiplicationTable');
    
    // Clear previous table
    tableContainer.innerHTML = '';
    
    // Generate multiplication table
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const div = document.createElement('div');
        div.textContent = `${number} × ${i} = ${result}`;
        tableContainer.appendChild(div);
    }
});

// FizzBuzz Challenge - Demonstrates while loop
document.getElementById('fizzbuzzBtn').addEventListener('click', function() {
    const limit = parseInt(document.getElementById('fizzbuzzLimit').value);
    const outputContainer = document.getElementById('fizzbuzzOutput');
    
    // Clear previous output
    outputContainer.innerHTML = '';
    
    let i = 1;
    while (i <= limit) {
        let output;
        if (i % 15 === 0) {
            output = 'FizzBuzz';
        } else if (i % 3 === 0) {
            output = 'Fizz';
        } else if (i % 5 === 0) {
            output = 'Buzz';
        } else {
            output = i.toString();
        }
        
        const div = document.createElement('div');
        div.textContent = output;
        outputContainer.appendChild(div);
        i++;
    }
});

// ==============================================
// Part 4: DOM Manipulation - Interactive web pages
// ==============================================

// Theme Switcher - Toggle dark mode
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') 
        ? 'Toggle Light Mode' 
        : 'Toggle Dark Mode';
});

// Dynamic List - Add and remove items
const dynamicList = document.getElementById('dynamicList');
const listItemInput = document.getElementById('listItemInput');

document.getElementById('addItemBtn').addEventListener('click', function() {
    if (!listItemInput.value.trim()) return;
    
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = listItemInput.value;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    dynamicList.appendChild(li);
    
    // Clear input
    listItemInput.value = '';
});

document.getElementById('removeLastBtn').addEventListener('click', function() {
    const lastItem = dynamicList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
});

// Element Creator - Create different types of elements
document.getElementById('createElementBtn').addEventListener('click', function() {
    const elementType = document.getElementById('elementType').value;
    const content = document.getElementById('elementContent').value.trim();
    const container = document.getElementById('elementContainer');
    
    if (!content) return;
    
    const element = document.createElement(elementType);
    element.textContent = content;
    container.appendChild(element);
    
    // Clear input
    document.getElementById('elementContent').value = '';
});

// Initialize with a multiplication table
document.getElementById('generateTableBtn').click();