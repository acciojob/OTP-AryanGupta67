window.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll(".code");

  // Focus the first input on load
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Allow only digits
      if (!/^[0-9]$/.test(value)) {
        e.target.value = "";
        return;
      }

      // Move to next input
      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      const key = e.key;

      if (key === "Backspace") {
        if (input.value) {
          input.value = "";
        } else if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      } else if (key >= "0" && key <= "9") {
        // Let input event handle it
      } else {
        e.preventDefault(); // Block non-digit keys
      }
    });
  });
});

