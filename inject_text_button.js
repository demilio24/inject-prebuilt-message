// Function to set the values in the textarea fields when the button is clicked
function setFieldValues() {
    let firstMessage = document.querySelector("textarea[data-q='first_message']");
    let secondMessage = document.querySelector("textarea[data-q='second_message_(follow_up_#1)']");
    let thirdMessage = document.querySelector("textarea[data-q='third_message_(follow_up_#2)']");
    let fourthMessage = document.querySelector("textarea[data-q='fourth_message_(follow_up_#3)']");

    if (firstMessage) {
        firstMessage.value = "Hey {{contact.name}}, it’s {{ custom_values.from_name_emails }} from {{ custom_values.business_name }}! Hope you're doing great! 😊 If you had a good experience with us, would you mind leaving a quick review? It helps us a ton! 🙏 Here’s the link: {{ custom_values.leave_a_review_link }}. Thanks so much!";
        firstMessage.setAttribute("value", firstMessage.value);
        firstMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (secondMessage) {
        secondMessage.value = "Hey {{contact.name}}, just following up! If you had a great experience with {{ custom_values.business_name }}, we’d love to hear about it! ⭐ Your feedback means everything to us. Quick review here: {{ custom_values.leave_a_review_link }}. Thanks a bunch!";
        secondMessage.setAttribute("value", secondMessage.value);
        secondMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (thirdMessage) {
        thirdMessage.value = "Hey {{contact.name}}, just wanted to check in! Your opinion really matters to us at {{ custom_values.business_name }}. If you’ve got a sec, we’d love for you to leave a review here: {{ custom_values.leave_a_review_link }}. It’d mean a lot! ❤️";
        thirdMessage.setAttribute("value", thirdMessage.value);
        thirdMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (fourthMessage) {
        fourthMessage.value = "Hey {{contact.name}}, this is the last time we’ll bug you! 😅 If you haven’t yet, we’d really appreciate a quick review for {{ custom_values.business_name }}. It helps us improve & keeps us going! 🙏 Here’s the link: {{ custom_values.leave_a_review_link }}. Thanks again!";
        fourthMessage.setAttribute("value", fourthMessage.value);
        fourthMessage.dispatchEvent(new Event('input', { bubbles: true }));
    }

    console.log("✅ Sample messages injected.");
}

// Load the Poppins font
let fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"; // Bold weight
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Create a style block for fade-in animation
let style = document.createElement("style");
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Create the button
let button = document.createElement("button");
button.innerText = "Inject Sample Messages";
button.style.position = "fixed";
button.style.top = "35px"; // Increased from 15px to 35px to add 20px padding
button.style.right = "15px";
button.style.zIndex = "1000";
button.style.padding = "14px 28px"; // 40% bigger
button.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)"; // Gradient from blue to purple
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "20px"; // 40% bigger than previous (14.4px → 20px)
button.style.fontWeight = "bold"; // Bold text
button.style.fontFamily = "'Poppins', sans-serif";
button.style.borderRadius = "5px";
button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
button.style.transition = "all 0.3s ease";
button.style.transform = "scale(0.9)"; // Initial 10% smaller
button.style.animation = "fadeIn 0.6s ease-out"; // Entrance animation

// Apply hover effect
button.addEventListener("mouseenter", () => {
    button.style.background = "linear-gradient(90deg, #0359b3, #5c0dbd)"; // Slightly darker gradient on hover
});
button.addEventListener("mouseleave", () => {
    button.style.background = "linear-gradient(90deg, #046bd2, #6a0dad)"; // Revert to original gradient
});

// Apply grow effect on click
button.addEventListener("click", () => {
    button.style.transform = "scale(1)";
    setTimeout(() => button.style.transform = "scale(0.9)", 150);
    setFieldValues();
});

// Append the button to the page (top-right corner)
document.body.appendChild(button);
