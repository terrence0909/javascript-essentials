// Function to handle form submission
function submitFeedback() {
    
    // Get values from form inputs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    // NEW: Get value from the user experience textarea
    const userExperience = document.getElementById('userExperince').value;
    
    // Display thank you message
    alert('Thank you for your valuable feedback')

    // Display user feedback on the webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    // NEW: Display the user experience
    document.getElementById('userExperience').innerHTML = userExperience;

    // Make the user information section visible
    document.getElementById('userInfo').style.display = 'block';

}

// Get the submit button element
const submitButton=document.getElementById('submitBtn');

// Assign the submitFeedback function to the button's onclick event
submitButton.onclick = submitFeedback;

// Add event listener for Enter key to submit the form
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
