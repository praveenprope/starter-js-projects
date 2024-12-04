const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const clearButton = document.getElementById("clear");

let currentInput = "";
let operatorPressed = false;

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString(); // Evaluate expression
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (operatorPressed) return; // Prevent multiple operators in a row
        operatorPressed = true;
      } else {
        operatorPressed = false;
      }

      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear the display and reset
clearButton.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});
