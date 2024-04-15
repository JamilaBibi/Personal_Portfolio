function toggleMenu() {
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get all modal containers
var modals = document.querySelectorAll('.modal');

// Loop through each modal
modals.forEach(function(modal, index) {
    // Get the image and insert it inside the modal
    var modalImg = modal.querySelector(".modal-content");
    var img = document.querySelector('.Project-pic-' + (index + 1));
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = modal.querySelector('.close');

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
});



// Function to toggle dark mode
function toggleDarkMode() {
    // Get the body element
    var body = document.body;

    // Toggle the dark mode class
    body.classList.toggle("dark-mode");
}


