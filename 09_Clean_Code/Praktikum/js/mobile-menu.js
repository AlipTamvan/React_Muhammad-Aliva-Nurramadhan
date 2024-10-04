//  Mengontrol Perilaku Menu Dropdown (Mobile)
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("grid", "grid-cols-1");
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("grid", "grid-cols-1");
    }
  });
});
