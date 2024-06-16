let participantCount = 1;

import { participantTemplate, successTemplate } from './Templates.js';

function addParticipant(){
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipant);
}

document.getElementById('add').addEventListener('click', addParticipant);

// Function to calculate total fees
function totalFees() {
    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}



// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const totalFeesAmount = totalFees(); // Calculate total fees
    const adultName = document.getElementById('adult_name').value; // Get adult name

    // Generate success message
    const successMessage = successTemplate({
        name: adultName,
        count: participantCount,
        total: totalFeesAmount
    });

    // Hide the form
    document.querySelector('form').style.display = 'none';

    // Show the summary with success message
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = successMessage;
    summaryElement.style.display = 'block';
}

// Add event listener to the form for the submit event
document.querySelector('form').addEventListener('submit', submitForm);
