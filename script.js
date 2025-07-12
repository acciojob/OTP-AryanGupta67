const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input if value is valid and not the last field
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Backspace") {
      // If current input has a value, clear it
      if (input.value) {
        input.value = "";
      } else if (index > 0) {
        // Otherwise move to previous and clear that
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    } else if (key >= "0" && key <= "9") {
      // For manual typing (already handled in input)
    } else {
      e.preventDefault(); // Prevent invalid keys
    }
  });
});
