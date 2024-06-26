document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! More details will be available soon.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
