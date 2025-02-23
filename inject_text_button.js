// Function to set the values in the textarea fields
function setFieldValues() {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    if (firstMessage) {
        firstMessage.value = "sample sentence 1"; 
        firstMessage.setAttribute("value", "sample sentence 1");
        firstMessage.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ First message set.");
    }

    if (secondMessage) {
        secondMessage.value = "sample sentence 2"; 
        secondMessage.setAttribute("value", "sample sentence 2");
        secondMessage.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Second message set.");
    }

    if (thirdMessage) {
        thirdMessage.value = "sample sentence 3"; 
        thirdMessage.setAttribute("value", "sample sentence 3");
        thirdMessage.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Third message set.");
    }

    if (fourthMessage) {
        fourthMessage.value = "sample sentence 4"; 
        fourthMessage.setAttribute("value", "sample sentence 4");
        fourthMessage.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Fourth message set.");
    }
}

// Ensure the fields are fully loaded before setting values
setTimeout(setFieldValues, 1500);

// Load the Poppins font
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Create a button to manually inject text
let button = document.createElement("button");
button.innerText = "Inject Sample Sentences";
button.style.position = "absolute";
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
button.style.transition = "all 0.3s ease";

// Position the button above the first message box
function positionButton() {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    if (firstMessage) {
        let rect = firstMessage.getBoundingClientRect();
        button.style.top = `${window.scrollY + rect.top - 40}px`; // Position above
        button.style.left = `${window.scrollX + rect.left}px`;
    } else {
        setTimeout(positionButton, 500);
    }
}

// Apply hover effect
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#5c0dbd"; // Darker purple on hover
});
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#6a0dad"; // Original purple
});

// Apply grow effect on click
button.addEventListener("click", () => {
    button.style.transform = "scale(1.1)";
    setTimeout(() => button.style.transform = "scale(1)", 150);
    setFieldValues();
});

// Append the button to the page
document.body.appendChild(button);

// Position button once fields load
setTimeout(positionButton, 1500);
