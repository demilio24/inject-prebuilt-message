// Function to set the values in the textarea fields when the button is clicked
function setFieldValues() {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    if (firstMessage) {
        firstMessage.value = "🚨 REMINDER: BE SURE TO PERSONALIZE THIS MESSAGE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE].\n\nHope you’re doing well! You worked with us a little while back, and I just wanted to reach out personally. If you had a good experience, would you mind leaving a quick review? It helps us a ton, and I’d really appreciate it.\n\nThanks so much!\n\nLink to leave a review below.";
        firstMessage.setAttribute("value", firstMessage.value);
        firstMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (secondMessage) {
        secondMessage.value = "🚨 REMINDER: BE SURE TO PERSONALIZE THIS MESSAGE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE] again.\n\nJust wanted to follow up in case you missed my last message. Your feedback means a lot to us, and we’d love to hear about your experience.\n\nIf you have a quick moment, I’d really appreciate it! Thanks again.\n\nLink to leave a review below.";
        secondMessage.setAttribute("value", secondMessage.value);
        secondMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    console.log("✅ Updated messages injected.");
}

// Function to create and style a button
function createButton(text) {
    let newButton = document.createElement("button");
    newButton.innerText = text;
    newButton.style.display = "block";
    newButton.style.marginTop = "10px";
    newButton.style.padding = "14px 28px";
    newButton.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)";
    newButton.style.color = "white";
    newButton.style.border = "none";
    newButton.style.cursor = "pointer";
    newButton.style.fontSize = "20px";
    newButton.style.fontWeight = "bold";
    newButton.style.fontFamily = "'Poppins', sans-serif";
    newButton.style.borderRadius = "5px";
    newButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    newButton.style.transition = "all 0.3s ease";
    newButton.style.transform = "scale(0.9)";

    newButton.addEventListener("mouseenter", () => {
        newButton.style.background = "linear-gradient(90deg, #0359b3, #5c0dbd)";
    });
    newButton.addEventListener("mouseleave", () => {
        newButton.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)";
    });
    newButton.addEventListener("click", () => {
        newButton.style.transform = "scale(1)";
        setTimeout(() => newButton.style.transform = "scale(0.9)", 150);
    });
    return newButton;
}

// Create the main button
let button = createButton("Inject Sample Messages");
button.style.position = "fixed";
button.style.top = "35px";
button.style.right = "15px";
button.style.zIndex = "1000";

let buttonsContainer = document.createElement("div");
buttonsContainer.style.position = "fixed";
buttonsContainer.style.top = "80px";
buttonsContainer.style.right = "15px";
buttonsContainer.style.zIndex = "1000";

button.addEventListener("click", () => {
    setFieldValues();
    if (buttonsContainer.childNodes.length === 0) {
        let button2 = createButton("Button 2");
        let button3 = createButton("Button 3");
        buttonsContainer.appendChild(button2);
        buttonsContainer.appendChild(button3);
    }
});

document.body.appendChild(button);
document.body.appendChild(buttonsContainer);
