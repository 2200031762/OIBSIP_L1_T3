document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    let result;
    let unit;

    switch (unitSelect) {
        case 'celsius':
            result = {
                celsius: temperatureInput,
                fahrenheit: (temperatureInput * 9/5) + 32,
                kelvin: temperatureInput + 273.15
            };
            unit = 'Celsius';
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperatureInput - 32) * 5/9,
                fahrenheit: temperatureInput,
                kelvin: ((temperatureInput - 32) * 5/9) + 273.15
            };
            unit = 'Fahrenheit';
            break;
        case 'kelvin':
            result = {
                celsius: temperatureInput - 273.15,
                fahrenheit: ((temperatureInput - 273.15) * 9/5) + 32,
                kelvin: temperatureInput
            };
            unit = 'Kelvin';
            break;
    }

    resultElement.innerHTML = `
        Celsius: ${result.celsius.toFixed(2)} °C<br>
        Fahrenheit: ${result.fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${result.kelvin.toFixed(2)} K
    `;
});
