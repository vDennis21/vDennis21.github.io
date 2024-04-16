function selectTour(tourType) {
    var description = "Enjoy a thrilling " + tourType + "!";
    var itinerary = "10:00 AM - Start\n12:00 PM - Lunch\n2:00 PM - Continue";
    var chatInterface = document.getElementById('chatbotUI');
    var optionsContainer = document.querySelector('.options');
    
    // Create new chat bubble for the selected tour
    var userChoice = document.createElement('div');
    userChoice.className = 'chat-message user-choice';
    userChoice.textContent = tourType;
    chatInterface.insertBefore(userChoice, optionsContainer);
    
    // Hide options
    optionsContainer.style.display = 'none';
    
    // Show the tour description
    var tourDescription = document.createElement('div');
    tourDescription.className = 'chat-message tour-description';
    tourDescription.innerHTML = "<strong>Description:</strong> " + description + "<br><strong>Itinerary:</strong> " + itinerary;
    chatInterface.appendChild(tourDescription);
}

/* Additional JS to handle UI interactions */
