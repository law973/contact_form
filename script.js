// RADIO LABEL STYLING ------------
const buttonGeneral = document.getElementById("general");
const buttonSupport = document.getElementById("support");
const labelGeneral = document.getElementById("general-label");
const labelSupport = document.getElementById("support-label");

// Function for adding and removing label styling as appropriate
function changeLabelStyle(buttonID) {

    if (buttonID == buttonGeneral.id) {
        buttonGeneral.checked = true;
        labelSupport.classList.remove("selected");
        labelGeneral.classList.add("selected");
    } else {
        buttonSupport.checked = true;
        labelGeneral.classList.remove("selected");
        labelSupport.classList.add("selected");
    };
};

// Event listeners for radio button labels
buttonGeneral.addEventListener("click", () => changeLabelStyle(buttonGeneral.id));
buttonSupport.addEventListener("click", () => changeLabelStyle(buttonSupport.id));

// FORM SUBMISSION ------------
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get necessary inputs by their IDs
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let queryInputs = document.querySelectorAll("input[name='query']");
    let message = document.getElementById("message");
    let consent = document.getElementById("consent");

    const toast = document.getElementById("toast");

    // Check if radio buttons are selected
    let querySelected = Array.from(queryInputs).some(input => input.checked);

    // Check if every field has a value
    if (
        firstName.value &&
        lastName.value &&
        email.value &&
        querySelected &&
        message.value &&
        consent.checked
    ) {
        toast.classList.add("active");
        setTimeout(() => { toast.classList.remove('active'); }, 10000);
    } else {
        alert("Please try again...");
    }
});