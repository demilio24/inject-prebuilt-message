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
        "🚨 FRIENDLY REMINDER: PERSONALIZE BEFORE SENDING!\n\nHey [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE] here!\n\nHope you're doing great! You worked with us recently, and I wanted to check in. If you enjoyed your experience, a quick review would mean the world to us. It helps more than you know!\n\nThanks so much!\n\nHere's the link to leave a review:",
        "🚨 REMINDER: PERSONALIZE BEFORE SENDING!\n\nHey, [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE] again.\n\nJust wanted to follow up in case my last message got buried. We’d love to hear your thoughts on your experience with us!\n\nIf you could take a quick minute, it would be a huge help. Thank you!\n\nHere’s the review link:",
        "🚨 LAST FRIENDLY REMINDER: PERSONALIZE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE].\n\nI know things get busy, but I wanted to check in one last time. If you found value in working with us, a quick review would mean so much!\n\nThank you in advance!\n\nHere’s the link:",
        "🚨 FINAL REQUEST: PERSONALIZE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE] again.\n\nI promise this is the last time I’ll ask! Your feedback really means a lot, and if you could spare a quick minute to leave a review, we’d truly appreciate it.\n\nThanks for your time and support!\n\nHere’s the link:"
    ]);
});

let button2 = createButton("Inject Sample Messages 2", 75, () => {
    setFieldValues([
        "🚨 IMPORTANT: DON’T FORGET TO PERSONALIZE THIS MESSAGE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE].\n\nJust wanted to take a moment to say thanks for working with us! If you had a great experience, could you drop us a quick review? It helps us improve and reach more people like you.\n\nAppreciate it!\n\nHere’s the link to leave a review:",
        "🚨 QUICK FOLLOW-UP: PERSONALIZE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE] again.\n\nI know life gets busy, but just checking in to see if you had a chance to leave a review. Your feedback helps us improve and grow!\n\nIf you could take just a minute, we’d be so grateful!\n\nHere’s the link:",
        "🚨 FINAL FOLLOW-UP: PERSONALIZE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE].\n\nI completely understand how busy things can get! Just wanted to send one last friendly nudge—if you had a great experience, a quick review would mean the world to us.\n\nThanks so much!\n\nHere’s the link:",
        "🚨 THIS IS MY LAST ASK: PERSONALIZE BEFORE SENDING!\n\nHey, it’s [WRITE YOUR NAME HERE] from [WRITE YOUR BUSINESS NAME HERE].\n\nI won’t bug you again—I just wanted to reach out one final time to see if you could leave us a quick review. It makes a huge difference for us!\n\nThank you for your time!\n\nHere’s the link:"
    ]);
});

let button3 = createButton("Inyectar Mensajes en Español", 125, () => {
    setFieldValues([
        "🚨 RECORDATORIO: PERSONALIZA ESTE MENSAJE ANTES DE ENVIARLO!\n\n¡Hola! Soy [ESCRIBE TU NOMBRE AQUÍ] de [ESCRIBE EL NOMBRE DE TU NEGOCIO AQUÍ].\n\nEspero que estés bien. Trabajamos juntos hace un tiempo y quería saber si podrías dejarnos una reseña rápida sobre tu experiencia. ¡Nos ayudaría muchísimo y lo apreciaríamos un montón!\n\nGracias de antemano.\n\nAquí tienes el enlace para dejar tu reseña:",
        "🚨 SEGUIMIENTO: PERSONALIZA ANTES DE ENVIAR!\n\n¡Hola! Soy [ESCRIBE TU NOMBRE AQUÍ] de [ESCRIBE EL NOMBRE DE TU NEGOCIO AQUÍ] nuevamente.\n\nSolo quería hacer un pequeño seguimiento por si no viste mi mensaje anterior. ¡Nos encantaría conocer tu opinión sobre tu experiencia con nosotros!\n\nSi puedes tomarte un minuto, lo agradeceríamos muchísimo.\n\nAquí tienes el enlace:",
        "🚨 ÚLTIMO RECORDATORIO: PERSONALIZA ANTES DE ENVIAR!\n\n¡Hola! Soy [ESCRIBE TU NOMBRE AQUÍ] de [ESCRIBE EL NOMBRE DE TU NEGOCIO AQUÍ].\n\nSé que la vida puede ser muy ocupada, pero quería hacer un último intento. Si tuviste una buena experiencia con nosotros, ¿te tomarías un momento para dejarnos una reseña?\n\n¡Te lo agradeceríamos mucho!\n\nAquí está el enlace:",
        "🚨 ÚLTIMA VEZ QUE TE MOLESTARÉ: PERSONALIZA ANTES DE ENVIAR!\n\n¡Hola! Soy [ESCRIBE TU NOMBRE AQUÍ] de [ESCRIBE EL NOMBRE DE TU NEGOCIO AQUÍ] nuevamente.\n\nPrometo que esta es la última vez que lo menciono. Si aún no has tenido la oportunidad, ¿podrías dejarnos una reseña rápida? Nos ayudaría muchísimo.\n\n¡Gracias por tu tiempo y apoyo!\n\nAquí tienes el enlace:"
    ]);
});

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
