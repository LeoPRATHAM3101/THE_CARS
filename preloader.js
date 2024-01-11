// preloader.js
document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader when the content is fully loaded
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 1000); // Adjust the delay as needed
});
