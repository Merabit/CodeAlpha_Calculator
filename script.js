const display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function handleInput(key) {
    if (key === 'C') {
        currentInput = '';
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
    } else if (key === 'Enter' || key === '=') {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
    } else {
        currentInput += key;
    }
    updateDisplay();
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        handleInput(btn.getAttribute('data-key'));
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789+-*/.=EnterBackspace';
    if (allowedKeys.includes(e.key) || e.key === 'C' || e.key === 'c') {
        if (e.key === 'c' || e.key === 'C') handleInput('C');
        else handleInput(e.key);
    }
});
