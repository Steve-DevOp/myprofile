// Time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
    
    greetingElement.textContent = greeting + ' Welcome to my profile!';
}

// Read more button functionality
function setupReadMoreButton() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreBio = document.querySelector('.more-bio');
    
    readMoreBtn.addEventListener('click', function() {
        moreBio.classList.toggle('hidden');
        
        if (moreBio.classList.contains('hidden')) {
            readMoreBtn.textContent = 'Read More';
        } else {
            readMoreBtn.textContent = 'Read Less';
        }
    });
}

// Skills button functionality
function setupSkillsButton() {
    const skillsBtn = document.getElementById('skills-btn');
    
    skillsBtn.addEventListener('click', function() {
        alert('My top skill is React.js! ⚛️');
    });
}

// Form validation
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const formSuccess = document.getElementById('form-success');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
            form.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            // In a real application, you would send the form data to a server here
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    setupReadMoreButton();
    setupSkillsButton();
    setupFormValidation();
});