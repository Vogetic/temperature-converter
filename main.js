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

if (!button.disabled) {
  button.addEventListener("click", () => {});
}
