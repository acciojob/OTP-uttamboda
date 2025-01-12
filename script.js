//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const otpInputs = document.querySelectorAll(".code");
    
    // Focus next input when a character is typed
    otpInputs.forEach((input, index) => {
        input.addEventListener("input", function(e) {
            if (e.target.value !== "") {
                // Focus the next input if current input is filled
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
    });

    // Handle backspace behavior
    otpInputs.forEach((input, index) => {
        input.addEventListener("keydown", function(e) {
            if (e.key === "Backspace" && input.value === "") {
                // Focus previous input when backspace is pressed
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });

    // Focus the first input on load
    otpInputs[0].focus();
});
