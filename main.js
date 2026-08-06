const temperatureInput = document.querySelector("#temperature");
const fromUnit = document.querySelector("#from-unit");
const toUnit = document.querySelector("#to-unit");
const button = document.querySelector(".submit");

temperatureInput.addEventListener("change", () => {
  if (
    temperatureInput.value == "" ||
    fromUnit.value == "" ||
    toUnit.value == ""
  ) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

fromUnit.addEventListener("change", () => {
  if (
    temperatureInput.value == "" ||
    fromUnit.value == "" ||
    toUnit.value == ""
  ) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

toUnit.addEventListener("change", () => {
  if (
    temperatureInput.value == "" ||
    fromUnit.value == "" ||
    toUnit.value == ""
  ) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  if (!button.disabled) {
    let result;

    if (fromUnit.value == "Celsius") {
      result = celsiusConverter();
    } else if (fromUnit.value == "Fahrenheit") {
      result = fahrenheitConverter();
    } else {
      result = kelvinConverter();
    }

    result = Math.round(result * 100) / 100;

    document.querySelector(".result").textContent =
      temperatureInput.value +
      " " +
      fromUnit.value +
      " is " +
      result +
      " " +
      toUnit.value;
  }
});

function celsiusConverter() {
  if (toUnit.value == "Fahrenheit") {
    return Number(temperatureInput.value) * (9 / 5) + 32;
  } else if (toUnit.value == "Kelvin") {
    return Number(temperatureInput.value) + 273.15;
  } else {
    return Number(temperatureInput.value);
  }
}

function fahrenheitConverter() {
  if (toUnit.value == "Celsius") {
    return (Number(temperatureInput.value) - 32) * (5 / 9);
  } else if (toUnit.value == "Kelvin") {
    return (Number(temperatureInput.value) + 459.67) * (5 / 9);
  } else {
    return Number(temperatureInput.value);
  }
}

function kelvinConverter() {
  if (toUnit.value == "Fahrenheit") {
    return Number(temperatureInput.value) * (9 / 5) - 459.67;
  } else if (toUnit.value == "Celsius") {
    return Number(temperatureInput.value) - 273.15;
  } else {
    return Number(temperatureInput.value);
  }
}
