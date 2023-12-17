document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and menu elements
    const toggleButton = document.getElementById('menu-toggle');
    const left = document.getElementsByClassName('left')[0]; // Use [0] to get the first element
    const right = document.getElementsByClassName('right')[0]; // Use [0] to get the first element

    // Add a click event listener to the button
    toggleButton.addEventListener('click', function() {
        // Toggle the 'collapsed' class on the elements
        left.classList.toggle('left-collapsed');
        right.classList.toggle('right-collapsed');
    });
});
