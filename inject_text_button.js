// Function to create and style a button
function createButton(text, topOffset, onClick) {
    let newButton = document.createElement("button");
    newButton.innerText = text;
    newButton.style.display = "block";
    newButton.style.position = "fixed";
    newButton.style.top = `${topOffset + 20}px`; // Ensures 20px padding at the top
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
    
    // Hover effects
    newButton.addEventListener("mouseenter", () => {
        newButton.style.background = "linear-gradient(90deg, #0359b3, #5c0dbd)";
    });
    newButton.addEventListener("mouseleave", () => {
        newButton.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)";
    });

    newButton.addEventListener("click", onClick);
    return newButton;
}

// Create and append buttons with the correct spacing
let button1 = createButton("Inject Sample Messages 1", 25, () => {
    setFieldValues(["Message 1", "Message 2", "Message 3", "Message 4"]);
});

let button2 = createButton("Inject Sample Messages 2", 75, () => {
    setFieldValues(["Message A", "Message B", "Message C", "Message D"]);
});

let button3 = createButton("Inyectar Mensajes en Español", 125, () => {
    setFieldValues(["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]);
});

// Append buttons to the document
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
