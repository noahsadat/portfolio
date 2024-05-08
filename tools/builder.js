// Import statements for different component templates
import cards from '../templates/cards.js';
import jumbotrons from '../templates/jumbotrons.js';
import heros from '../templates/heros.js';
import features from '../templates/features.js';
import buttons from '../templates/buttons.js';

// Global variable to keep the last clicked template for persistence across events
let lastClickedTemplate = '';

// Function to setup component button functionality
function setupComponentButton(buttonId, templates) {
    const button = document.getElementById(buttonId);
    if (button) {  // Check if the button exists before attaching event handlers
        button.addEventListener('click', () => {
            const numberSelector = document.querySelector('.number-selector');
            const craftingArea = document.querySelector('.crafting-area');

            // Display the number selector and clear any previous content
            numberSelector.style.display = 'block';
            numberSelector.innerHTML = '';

            // Create a number span for each template in the templates object
            Object.entries(templates).forEach(([key, template], index) => {
                const numberSpan = document.createElement('span');
                numberSpan.textContent = index + 1; // Number the templates starting from 1
                numberSpan.classList.add('btn', 'btn-outline-secondary', 'm-1'); // Apply Bootstrap button styling

                // Set event listeners for mouse interactions
                numberSpan.addEventListener('mouseover', () => {
                    craftingArea.innerHTML = template;  // Show template on mouseover
                });
                numberSpan.addEventListener('mouseout', () => {
                    craftingArea.innerHTML = lastClickedTemplate;  // Revert to last clicked template on mouseout
                });
                numberSpan.addEventListener('click', () => {
                    lastClickedTemplate = template;  // Update last clicked template and display it
                    craftingArea.innerHTML = lastClickedTemplate;
                });

                // Append the newly created number span to the number selector
                numberSelector.appendChild(numberSpan);
            });
        });
    } else {
        console.warn(`Button with ID ${buttonId} does not exist.`); // Log a warning if the button was not found
    }
}

// When the document is fully loaded, set up the buttons for each component type
document.addEventListener('DOMContentLoaded', function () {
    setupComponentButton('show-cards', cards);
    setupComponentButton('show-jumbotrons', jumbotrons);
    setupComponentButton('show-heros', heros);
    setupComponentButton('show-features', features);
    setupComponentButton('show-buttons', buttons);
});

document.addEventListener('DOMContentLoaded', function () {
    const iconToggleButton = document.querySelector('.icon-toggle-button');
    iconToggleButton.addEventListener('click', function () {
        const contentArea = document.querySelector('.crafting-area'); // Selector for the crafting area
        const contentToCopy = contentArea.innerHTML; // Get the inner HTML of the crafting area

        navigator.clipboard.writeText(contentToCopy)
            .then(() => {
                // Visual feedback or changes upon successful copy
                const iconImage = this.querySelector('img');
                iconImage.src = '/files/copied.svg'; // Change to "copied" icon
                iconImage.alt = 'Copied'; // Update alt text

                // Optionally revert the icon back after a delay
                setTimeout(() => {
                    iconImage.src = '/files/copy.svg';
                    iconImage.alt = 'Copy';
                }, 2000); // Revert back after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy contents:', err);
                // Handle error (e.g., display an error message or log to console)
            });
    });
});



