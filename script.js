// Initialize the counter from local storage or set it to 0 if not present
let counter = localStorage.getItem('distractionCount') ? parseInt(localStorage.getItem('distractionCount')) : 0;

// Update the counter display
function updateCounter() {
    document.getElementById('counter').textContent = counter;
    localStorage.setItem('distractionCount', counter);
}

// Increment the counter
document.getElementById('increment').addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Decrement the counter
document.getElementById('decrement').addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});

// Reset the counter
document.getElementById('reset').addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Initialize the counter display on page load
updateCounter();
