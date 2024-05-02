document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var number = parseInt(document.getElementById('numberInput').value);
    var resultElement = document.getElementById('result');
    if (isNaN(number)) {
        resultElement.textContent = 'Por favor, ingrese un número válido.';
        return;
    }
    var factorial = calculateFactorial(number);
    resultElement.textContent = 'El factorial de ' + number + ' es: ' + factorial;
});

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
