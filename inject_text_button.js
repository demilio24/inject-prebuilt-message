// Function to set the value in the textarea field
function setFieldValue() {
    let textAreaField = document.querySelector("textarea[data-q='first_message']");

    if (textAreaField) {
        textAreaField.value = "sample sentence"; // Set the value
        textAreaField.setAttribute("value", "sample sentence"); // Ensure persistence
        textAreaField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        console.log("✅ Successfully set the message.");
    } else {
        console.error("❌ Textarea field not found! Retrying...");
        setTimeout(setFieldValue, 500); // Retry after 500ms in case the field loads later
    }
}

// Ensure the field is fully loaded before setting the value
setTimeout(setFieldValue, 1500);

// Load the Poppins font
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Create a button to manually inject text
let button = document.createElement("button");
button.innerText = "Inject Sample Sentence";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.zIndex = "1000";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#6a0dad"; // Purple color
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.style.fontFamily = "'Poppins', sans-serif";
button.style.borderRadius = "5px";
button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
button.style.transition = "background-color 0.3s ease";

// Hover effect
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#5c0dbd"; // Darker purple on hover
});
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#6a0dad"; // Original purple
});

// Add event listener to the button
button.addEventListener("click", setFieldValue);

// Append the button to the page
document.body.appendChild(button);
