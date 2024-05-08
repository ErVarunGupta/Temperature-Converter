const celsius = document.querySelector(".celsius-input");
const fahrenheit = document.querySelector(".fahrenheit-input");
const kelvin = document.querySelector(".kelvin-input");
const btn = document.querySelector("#button");

//Function to convert celsius to fahrenheit and kelvin
celsius.oninput = function () {
    let inputCelsius = parseFloat(celsius.value);
    let f = (inputCelsius * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (inputCelsius + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
}

//Function to convert fahrenheit to celsius and kelvin
fahrenheit.oninput = function () {
    let inputFahrenheit = parseFloat(fahrenheit.value)
    let c = ((inputFahrenheit - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}

//Function to convert kelvin to celsius and fahrenheit
kelvin.oninput = function () {
    let inputKelvin = parseFloat(kelvin.value);
    let f = (inputKelvin - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (inputKelvin - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
}


