document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let celsius, fahrenheit, kelvin;

    // Conversion logic
    if (unit === 'celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
    }

    // Display the results
    document.getElementById('celsius-result').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheit-result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvin-result').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});
