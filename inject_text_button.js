// Function to set the values in the textarea fields when a button is clicked
function setFieldValues(setType) {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    let messages = {
        set1: [
            "🚨 Reminder: Personalize this message before sending!\n\nHey, it's [Business Owner's Name] from [Business Name],\n\nWe loved having you as a customer, and we'd truly appreciate it if you could take a moment to leave us a review! Your feedback helps us improve and helps others too.\n\nThank you so much for your time!\n\nLeave your review here: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHey, it's [Business Owner's Name] from [Business Name],\n\nJust following up! We’d love to hear about your experience with us. If you haven’t had a chance to leave a review yet, it would mean the world to us!\n\nYou can leave your review here: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHey, it's [Business Owner's Name] from [Business Name],\n\nWe know life gets busy, but your review would really help us and others considering our services! If you can spare a moment, we’d love your feedback.\n\nLeave your review here: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHey, it's [Business Owner's Name] from [Business Name],\n\nThis is our last follow-up! We truly appreciate your time and support. If you’re able to leave a review, we’d be so grateful!\n\nHere’s the link to leave a review: [Insert Link]"
        ],
        set2: [
            "🚨 Reminder: Personalize this message before sending!\n\nHi, it's [Business Owner's Name] from [Business Name],\n\nWe hope you’re doing great! If you had a great experience with us, we’d love it if you could share your thoughts in a quick review.\n\nThank you for your support!\n\nLeave your review here: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHey again, it's [Business Owner's Name] from [Business Name]!\n\nJust wanted to check if you had a chance to leave us a review. It would really help us and others looking for great service!\n\nHere’s the link to leave your review: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHi, it's [Business Owner's Name] from [Business Name],\n\nStill hoping to hear your thoughts! Your feedback is valuable, and we’d appreciate your time if you could leave a review.\n\nYou can share your experience here: [Insert Link]",
            "🚨 Reminder: Personalize this message before sending!\n\nHey, it's [Business Owner's Name] from [Business Name],\n\nWe promise this is the last reminder! We’d truly love to hear from you. A few words in a review would mean a lot to us.\n\nHere’s the review link: [Insert Link]"
        ],
        set3: [
            "🚨 ¡Recuerda personalizar este mensaje antes de enviarlo!\n\nHola, soy [Nombre del Dueño] de [Nombre del Negocio],\n\nNos encantó atenderte y nos encantaría saber tu opinión. ¿Podrías dejarnos una reseña? ¡Nos ayudaría mucho!\n\nDeja tu reseña aquí: [Insertar Enlace]",
            "🚨 ¡Recuerda personalizar este mensaje antes de enviarlo!\n\nHola, soy [Nombre del Dueño] de [Nombre del Negocio],\n\nSolo un recordatorio amistoso. Tu opinión nos importa y nos ayudaría mucho si pudieras compartir tu experiencia.\n\nPuedes dejar tu reseña aquí: [Insertar Enlace]",
            "🚨 ¡Recuerda personalizar este mensaje antes de enviarlo!\n\nHola, soy [Nombre del Dueño] de [Nombre del Negocio],\n\nQueríamos asegurarnos de que tuviste la oportunidad de dejarnos una reseña. ¡Cada opinión cuenta!\n\nComparte tu experiencia aquí: [Insertar Enlace]",
            "🚨 ¡Recuerda personalizar este mensaje antes de enviarlo!\n\nHola, soy [Nombre del Dueño] de [Nombre del Negocio],\n\nPrometemos que este es nuestro último mensaje. Nos encantaría saber tu opinión. Si tienes un momento, deja tu reseña aquí: [Insertar Enlace]"
        ]
    };

    [firstMessage, secondMessage, thirdMessage, fourthMessage].forEach((field, index) => {
        if (field) {
            field.value = messages[setType][index];
            field.setAttribute("value", field.value);
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
}

// Load the Poppins font
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Create buttons
types = ["set1", "set2", "set3"];
labels = ["Inject Sample Messages #1", "Inject Sample Messages #2", "Inject Sample Messages (Spanish)"];
let buttons = [];

types.forEach((type, index) => {
    let button = document.createElement("button");
    button.innerText = labels[index];
    button.style.position = "fixed";
    button.style.top = `${35 + index * 60}px`;
    button.style.right = "15px";
    button.style.padding = "14px 28px";
    button.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)";
    button.style.color = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bold";
    button.style.fontFamily = "'Poppins', sans-serif";
    button.style.borderRadius = "5px";
    button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    button.style.transition = "all 0.3s ease";
    button.style.marginBottom = "10px";
    button.addEventListener("click", () => setFieldValues(type));
    document.body.appendChild(button);
});
