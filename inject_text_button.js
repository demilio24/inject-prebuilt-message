// Function to inject text into the input field
function injectText() {
    // Select the input field using its placeholder text
    let inputField = document.querySelector("input[placeholder='First Message']");
    
    if (inputField) {
        inputField.value = "sample sentence"; // Set the value
        inputField.setAttribute("value", "sample sentence"); // Ensure persistence
        inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        console.log("✅ Successfully injected text into the field.");
    } else {
        console.error("❌ Input field not found! Retrying...");
        setTimeout(injectText, 500); // Retry after 500ms
    }
}

// Create a button to trigger the injection
let button = document.createElement("button");
button.innerText = "Inject Sample Sentence";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.zIndex = "1000";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#28a745";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "16px";

// Add event listener to button
button.addEventListener("click", injectText);

// Append button to body
document.body.appendChild(button);
