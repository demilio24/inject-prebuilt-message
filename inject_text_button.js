// Function to set the values in the textarea fields when the button is clicked
function setFieldValues(messages) {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    if (firstMessage) {
        firstMessage.value = messages[0];
        firstMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (secondMessage) {
        secondMessage.value = messages[1];
        secondMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (thirdMessage) {
        thirdMessage.value = messages[2];
        thirdMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (fourthMessage) {
        fourthMessage.value = messages[3];
        fourthMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

// Function to create and style a button
function createButton(text, topOffset, onClick) {
    let newButton = document.createElement("button");
    newButton.innerText = text;
    newButton.style.display = "block";
    newButton.style.position = "fixed";
    newButton.style.top = `${topOffset + 10}px`;
    newButton.style.right = "15px";
    newButton.style.zIndex = "1000";
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
    newButton.addEventListener("click", onClick);

    newButton.addEventListener("mouseenter", () => {
        newButton.style.background = "linear-gradient(90deg, #0359b3, #5c0dbd)";
    });
    newButton.addEventListener("mouseleave", () => {
        newButton.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)";
    });
    return newButton;
}

// Create and append all three buttons at the top-right from the start
let button1 = createButton("Inject Sample Messages 1", 25, () => {
    setFieldValues([
        "🚨 REMINDER: Hey, this is an original sample message.",
        "🚨 REMINDER: Follow-up message #1 here.",
        "🚨 REMINDER: Follow-up message #2 here.",
        "🚨 REMINDER: Follow-up message #3 here."
    ]);
});

let button2 = createButton("Inject Sample Messages 2", 75, () => {
    setFieldValues([
        "🚨 VARIATION: Here is another sample message variation.",
        "🚨 VARIATION: Follow-up message #1 variation.",
        "🚨 VARIATION: Follow-up message #2 variation.",
        "🚨 VARIATION: Follow-up message #3 variation."
    ]);
});

let button3 = createButton("Inyectar Mensajes en Español", 125, () => {
    setFieldValues([
        "🚨 RECORDATORIO: Este es un mensaje de muestra en español.",
        "🚨 RECORDATORIO: Mensaje de seguimiento #1 en español.",
        "🚨 RECORDATORIO: Mensaje de seguimiento #2 en español.",
        "🚨 RECORDATORIO: Mensaje de seguimiento #3 en español."
    ]);
});

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
