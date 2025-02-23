// Function to set the values in the textarea fields when the button is clicked
function setFieldValues() {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    if (firstMessage) {
        firstMessage.value = "sample sentence 1"; 
        firstMessage.setAttribute("value", "sample sentence 1");
        firstMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (secondMessage) {
        secondMessage.value = "sample sentence 2"; 
        secondMessage.setAttribute("value", "sample sentence 2");
        secondMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (thirdMessage) {
        thirdMessage.value = "sample sentence 3"; 
        thirdMessage.setAttribute("value", "sample sentence 3");
        thirdMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (fourthMessage) {
        fourthMessage.value = "sample sentence 4"; 
        fourthMessage.setAttribute("value", "sample sentence 4");
        fourthMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    console.log("✅ Sample sentences injected.");
}

// Load the Poppins font
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Create the button
let button = document.createElement("button");
button.innerText = "Inject Sample Sentences";
button.style.position = "relative";
button.style.display = "block";
button.style.margin = "15px auto"; // Centers the button with top & bottom padding
button.style.padding = "10px 20px";
button.style.backgroundColor = "#6a0dad"; // Purple color
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "14.4px"; // 10% smaller than 16px
button.style.fontFamily = "'Poppins', sans-serif";
button.style.borderRadius = "5px";
button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
button.style.transition = "all 0.3s ease";
button.style.transform = "scale(0.9)"; // Initial 10% smaller

// Apply hover effect
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#5c0dbd"; // Darker purple on hover
});
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#6a0dad"; // Original purple
});

// Apply grow effect on click
button.addEventListener("click", () => {
    button.style.transform = "scale(1)";
    setTimeout(() => button.style.transform = "scale(0.9)", 150);
    setFieldValues();
});

// Append the button above the "First Message" label
function positionButton() {
    let firstMessageLabel = document.querySelector("label[for='first_message'], label[for='first_message *']"); // Selecting the label
    if (firstMessageLabel) {
        firstMessageLabel.parentNode.insertBefore(button, firstMessageLabel); // Insert button before label
    } else {
        setTimeout(positionButton, 500);
    }
}

// Position button once fields load
setTimeout(positionButton, 1500);
