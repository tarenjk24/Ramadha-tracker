// Function to save missed days
function saveMissedDays() {
    const missedDays = document.getElementById('missedDays').value;
    if (missedDays >= 0) {
        localStorage.setItem('missedDays', missedDays);
        document.getElementById('message').textContent = `Missed Days of Fasting: ${missedDays}`;
    } else {
        document.getElementById('message').textContent = 'Please enter a valid number of days.';
    }
}

// Function to load missed days on page load
window.onload = function() {
    const savedMissedDays = localStorage.getItem('missedDays');
    if (savedMissedDays !== null) {
        document.getElementById('missedDays').value = savedMissedDays;
        document.getElementById('message').textContent = `Missed Days of Fasting: ${savedMissedDays}`;
    }
}
