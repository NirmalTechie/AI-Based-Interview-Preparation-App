document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");

    // Example function to display an alert when a button is clicked
    function showAlert(message) {
        alert(message);
    }

    // Attach event listener to all buttons with class 'btn-alert'
    let buttons = document.querySelectorAll(".btn-alert");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            showAlert("Button clicked!");
        });
    });

    // Example form validation
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let inputs = form.querySelectorAll("input");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    alert("Please fill in all fields.");
                }
            });

            if (valid) {
                alert("Form submitted successfully!");
            }
        });
    }
});
