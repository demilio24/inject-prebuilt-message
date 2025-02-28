// Function to set the values in the textarea fields when a button is clicked
function setFieldValues(setType) {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    let messages = {
        set1: [
            "🚨 Reminder: Be sure to personalize this message before sending!\n\nHey, it’s {{ custom_values.from_name_emails }} from {{ custom_values.business_name }}.\n\nHope you’re doing well! You worked with us a little while back, and I just wanted to reach out personally. If you had a good experience, would you mind leaving a quick review? It helps us a ton, and I’d really appreciate it.\n\nThanks so much!\n\nLink to leave a review below.",
            "🚨 Reminder: Be sure to personalize this message before sending!\n\nHey, it’s {{ custom_values.from_name_emails }} from {{ custom_values.business_name }} again.\n\nJust wanted to follow up in case you missed my last message. Your feedback means a lot to us, and we’d love to hear about your experience.\n\nIf you have a quick moment, I’d really appreciate it! Thanks again.\n\nLink to leave a review below.",
            "🚨 Reminder: Be sure to personalize this message before sending!\n\nHey, it’s {{ custom_values.from_name_emails }} from {{ custom_values.business_name }}.\n\nI know life gets busy, but I wanted to check in one more time. If you had a great experience with us, would you mind leaving a quick review? It only takes a moment, and it really helps us out.\n\nAppreciate you!\n\nLink to leave a review below.",
            "🚨 Reminder: Be sure to personalize this message before sending!\n\nHey, it’s {{ custom_values.from_name_emails }} from {{ custom_values.business_name }} again.\n\nI promise this is the last time I’ll ask! We’d love to hear your thoughts on your experience with us. If you haven’t had a chance to leave a review yet, it would mean a lot.\n\nThanks again for your time and support!\n\nLink to leave a review below."
        ],
        set2: [
            "Hello! Just wanted to follow up on our previous conversation. Do you have any questions or need any further details? Let me know, I’d love to help!",
            "Hey there! Checking in to see if you had a chance to consider our proposal. Let me know if you have any concerns!",
            "Hope you’re doing well! I just wanted to circle back and see if you needed any additional information. Looking forward to your response!",
            "Just a final follow-up! If you’re interested, I’d love to discuss further. Let me know your thoughts. Thanks again!"
        ],
        set3: [
            "🚨 Recordatorio: Asegúrate de personalizar este mensaje antes de enviarlo!\n\nHola, soy {{ custom_values.from_name_emails }} de {{ custom_values.business_name }}.\n\nEspero que estés bien. Hace un tiempo trabajaste con nosotros y quería comunicarme personalmente. Si tuviste una buena experiencia, ¿te importaría dejarnos una reseña rápida? Nos ayuda muchísimo y te lo agradecería mucho.\n\n¡Muchas gracias!\n\nEnlace para dejar una reseña abajo.",
            "🚨 Recordatorio: Asegúrate de personalizar este mensaje antes de enviarlo!\n\nHola, soy {{ custom_values.from_name_emails }} de {{ custom_values.business_name }} otra vez.\n\nSolo quería hacer un seguimiento en caso de que te hayas perdido mi último mensaje. Tu opinión significa mucho para nosotros y nos encantaría saber sobre tu experiencia.\n\nSi tienes un momento, ¡te lo agradecería mucho! Gracias de nuevo.\n\nEnlace para dejar una reseña abajo.",
            "🚨 Recordatorio: Asegúrate de personalizar este mensaje antes de enviarlo!\n\nHola, soy {{ custom_values.from_name_emails }} de {{ custom_values.business_name }}.\n\nSé que la vida puede estar ocupada, pero quería hacer un último intento. Si tuviste una gran experiencia con nosotros, ¿te importaría dejarnos una reseña rápida? Solo toma un momento y realmente nos ayuda.\n\n¡Te lo agradezco mucho!\n\nEnlace para dejar una reseña abajo.",
            "🚨 Recordatorio: Asegúrate de personalizar este mensaje antes de enviarlo!\n\nHola, soy {{ custom_values.from_name_emails }} de {{ custom_values.business_name }} otra vez.\n\n¡Prometo que esta es la última vez que pregunto! Nos encantaría saber tus pensamientos sobre tu experiencia con nosotros. Si aún no has dejado una reseña, significaría mucho para nosotros.\n\nGracias de nuevo por tu tiempo y apoyo.\n\nEnlace para dejar una reseña abajo."
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
    button.style.borderRadius = "5px";
    button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    button.style.transition = "all 0.3s ease";
    button.style.marginBottom = "10px";
    button.addEventListener("click", () => setFieldValues(type));
    document.body.appendChild(button);
});
