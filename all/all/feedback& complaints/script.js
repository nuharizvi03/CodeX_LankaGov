document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const feedback = document.getElementById('feedback').value;
        
        // Here you would typically send the data to a server
        // For this example, we'll just log it and show a thank you message
        console.log({
            name,
            email,
            service,
            feedback
        });
        
        // Hide form and show thank you message
        feedbackForm.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        
        // Reset form (optional)
        feedbackForm.reset();
    });
});