// Update displayed values for sliders (used in the Health Tracker page)
function updateValue(id, value) {
    document.getElementById(id).textContent = value;
}

// Log Symptoms Functionality (for the Health Tracker page)
function logSymptoms() {
    const fatigue = document.getElementById("fatigue").value;
    const pain = document.getElementById("pain").value;
    const mood = document.getElementById("mood").value;
    const logMessage = document.getElementById("logMessage");
    const symptomLog = document.getElementById("symptomLog");

    // Display immediate feedback
    logMessage.textContent = `Symptoms logged: Fatigue - ${fatigue}, Pain - ${pain}, Mood - ${mood}`;
    logMessage.style.display = 'block';
    logMessage.classList.add('fade-in');

    // Get the current date and time
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Create a new log entry
    const logEntry = document.createElement("li");
    logEntry.textContent = `Date: ${date} Time: ${time} - Fatigue: ${fatigue}, Pain: ${pain}, Mood: ${mood}`;
    symptomLog.prepend(logEntry); // Add new entry to the top

    // Auto-hide the log message after a few seconds
    setTimeout(() => {
        logMessage.style.display = 'none';
    }, 3000);
}

// Reminder functionality (for the Medication & Reminders page)
function setReminder() {
    const medicationName = document.getElementById("medicationName").value;
    const reminderTime = document.getElementById("reminderTime").value;
    const reminderMessage = document.getElementById("reminderMessage");
    const medicationLog = document.getElementById("medicationLog");

    if (reminderTime && medicationName) {
        // Display immediate feedback for setting the reminder
        reminderMessage.textContent = `Reminder set for ${medicationName} at ${reminderTime}`;
        reminderMessage.style.display = 'block';

        // Get the current date and time
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        // Create a new log entry
        const logEntry = document.createElement("li");
        logEntry.textContent = `Date: ${date} Time: ${time} - Medication: ${medicationName}, Reminder: ${reminderTime}`;
        medicationLog.prepend(logEntry); // Add new entry to the top

        // Auto-hide the reminder message after a few seconds
        setTimeout(() => {
            reminderMessage.style.display = 'none';
        }, 3000);
    } else {
        alert("Please enter a medication name and set a reminder time.");
    }
}

// Initialize the chatbot (for the Chatbot Companion page)
function initializeChatbot() {
    const chatbotIframe = document.getElementById("chatbotIframe");
    if (chatbotIframe) {
        // Custom chatbot logic can be added here (if needed)
        console.log("Chatbot initialized.");
    } else {
        console.error("Chatbot iframe not found.");
    }
}

// Form validation and submission for contact forms (used on resource/contact forms)
function validateAndSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const name = form.querySelector("input[name='name']").value;
    const email = form.querySelector("input[name='email']").value;
    const message = form.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields before submitting.");
        return;
    }

    // Log form data or submit it to the server
    console.log(`Form submitted with Name: ${name}, Email: ${email}, Message: ${message}`);
    alert("Thank you for reaching out! We will get back to you shortly.");

    // Optionally, clear the form after submission
    form.reset();
}

// Event listener for form submission (add this to your form elements)
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", validateAndSubmitForm);
});

// Display Health Trends (for health tracking page)
function displayHealthTrends() {
    // Placeholder for chart functionality (could use Chart.js or other libraries)
    const trendChartContainer = document.getElementById("trendChartContainer");
    if (trendChartContainer) {
        trendChartContainer.innerHTML = "<p>Chart loading...</p>"; // Placeholder for loading
        // Insert chart logic here (using Chart.js, for example)
    }
}

// Initialize health trend display on page load
document.addEventListener("DOMContentLoaded", displayHealthTrends);

// Scroll to Top Functionality (for smooth scroll to top button)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener for scroll to top button (if you have one on the page)
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", scrollToTop);
}
