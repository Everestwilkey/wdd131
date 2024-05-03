document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById('byuimg');
  var themeSelector = document.getElementById("theme");
  themeSelector.addEventListener("change", function () {
    // Check if the selected theme is 'dark'
    if (this.value === "dark") {
      document.body.classList.add("dark");
      image.src = 'images/byui-logo_white.png';
    } else {
      document.body.classList.remove("dark");
      image.src = 'images/byui-logo_blue.webp';
    }
  });
});
