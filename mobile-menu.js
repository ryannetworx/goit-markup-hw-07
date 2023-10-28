// Wait for the document to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the menu icon, navigation overlay, and navigation box
    var menuIcon = document.getElementById("menu-icon");
    var navOverlay = document.getElementById("navOverlay");
    var navBox = document.getElementById("navBox");
  
    // Add a click event listener to the menu icon
    menuIcon.addEventListener("click", function() {
      // Show the navigation overlay and navigation box
      navOverlay.style.display = "block";
      navBox.style.display = "block";
    });
  
    // Add a click event listener to the close button
    var closeNavBtn = document.getElementById("closeNavBtn");
    closeNavBtn.addEventListener("click", function() {
      // Hide the navigation overlay and navigation box
      navOverlay.style.display = "none";
      navBox.style.display = "none";
    });
  });
  