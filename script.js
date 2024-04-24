const buttonEl = document.querySelectorAll("button");
const inputEl = document.getElementById("number_input");

for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", () => {
    const buttonValue = buttonEl[i].textContent;
    if (buttonValue === "C") {
      Reset();
    } else if (buttonValue === "=") {
      Result();
    } else {
      appendValue(buttonValue);
    }
  });
}
function Reset() {
  inputEl.value = "";
}
function Result() {
  inputEl.value = eval(inputEl.value);
}

function appendValue(buttonValue) {
  inputEl.value += buttonValue;
}
