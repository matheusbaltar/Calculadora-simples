document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Erro';
        }
    }

    function handleButtonClick(e) {
        const key = e.target.textContent;
        switch (key) {
            case 'C':
                clearDisplay();
                break;
            case 'del':
                deleteLastChar();
                break;
            case '=':
                calculate();
                break;
            default:
                appendToDisplay(key);
        }
    }

    function handleKeyPress(e) {
        const key = e.key;
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            button.click();
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 100);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', handleKeyPress);
});