// Function to inject text into the textarea field
function injectText() {
    // Select the textarea using the data-q attribute
    let textAreaField = document.querySelector("textarea[data-q='first_message']");
    
    if (textAreaField) {
        textAreaField.value = "sample sentence"; // Set the value
        textAreaField.setAttribute("value", "sample sentence"); // Ensure persistence
        textAreaField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        console.log("✅ Successfully injected text into the textarea.");
    } else {
        console.error("❌ Textarea field not found! Retrying...");
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
button.style.borderRadius = "5px";

// Add event listener to button
button.addEventListener("click", injectText);

// Append button to body
document.body.appendChild(button);
