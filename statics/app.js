document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#menu').addEventListener('click', () => load_menu());
    document.querySelector('#aboutus').addEventListener('click', () => load_aboutus());

    // By default, load the menu
    load_menu();
});

// Function to load menu
function load_menu() {
    // Show the menu and hide other views
    document.querySelector('#menu').style.display = 'block';
    document.querySelector('#aboutus').style.display = 'none';
}

// Function to load aboutus
function load_aboutus() {
    // Show the aboutus and hide other views
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#aboutus').style.display = 'block';
}


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
