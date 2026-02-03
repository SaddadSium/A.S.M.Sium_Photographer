const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfruEvXO4_kwE7hkN14859o8RBbVWqK8Q3a_FXnm2Y5JB9_Jw/formResponse";

const form = document.getElementById('messageForm');
const quoteBtn = document.getElementById('quoteBtn');

// 1. Submit Button Handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    sendToGoogle("Standard Submission");
});

// 2. Quote Button Handler
quoteBtn.addEventListener('click', function() {
    if (form.checkValidity()) {
        sendToGoogle("Quote Request");
    } else {
        form.reportValidity();
    }
});

function sendToGoogle(actionType) {
    const formData = new FormData();
    
    // mapping your specific entry IDs
    formData.append('entry.750201849', document.getElementById('name').value);
    formData.append('entry.646854427', document.getElementById('phone').value);
    formData.append('entry.1689257201', document.getElementById('email').value);
    formData.append('entry.1101252241', `${document.getElementById('description').value} (Action: ${actionType})`);

    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        alert("Success! Your " + actionType + " has been recorded.");
        form.reset();
    })
    .catch(err => {
        alert("Error! Please try again.");
        console.error(err);
    });
}