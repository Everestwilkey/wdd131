document.addEventListener("DOMContentLoaded", function () {
  var themeSelector = document.getElementById("theme");
  themeSelector.addEventListener("change", function () {
    // Check if the selected theme is 'dark'
    if (this.value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
});
