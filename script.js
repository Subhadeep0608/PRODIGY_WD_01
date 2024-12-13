document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle_btn");
  const dropdownMenu = document.querySelector(".dropdown_menu");
  const logo = document.getElementById("logo");

  // Function to toggle dropdown menu
  function toggleDropdown() {
    dropdownMenu.classList.toggle("show");
  }

  // Function to hide dropdown menu
  function hideDropdown() {
    dropdownMenu.classList.remove("show");
  }

  // Add click event listener to the toggle button
  toggleButton.addEventListener("click", toggleDropdown);

  // Function to check window width and add/remove event listener for logo
  function checkWindowSize() {
    if (window.innerWidth < 450) {
      logo.addEventListener("click", toggleDropdown);
    } else {
      logo.removeEventListener("click", toggleDropdown);
    }

    if (window.innerWidth > 890) {
    hideDropdown(); // Hide the dropdown menu
  }
}

  // Check window size on load
  checkWindowSize();

  // Check window size on resize
  window.addEventListener("resize", checkWindowSize);
});