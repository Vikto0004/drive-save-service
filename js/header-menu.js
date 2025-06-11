const body = document.body;
const header = document.querySelector(".header");

const burgerBtn = document.querySelector(".burgerBtn");
const headerMenu = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".closeBtn");

function openMenu() {
  headerMenu.classList.add("mobile-menu-active");
}

function closeMenu() {
  headerMenu.classList.remove("mobile-menu-active");
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
headerMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-nav-link")) {
    closeMenu();
  }
});

const servicesElement = document.querySelector(".services-acc");
const servicesAccList = document.querySelector(".services-acc-list");
const elementHeight = servicesAccList.offsetHeight;

servicesAccList.style.height = "0";
servicesAccList.style.opacity = "1";

document.addEventListener("mousemove", function (event) {
  if (!servicesElement) return;

  const target = event.target;

  if (servicesElement.contains(target)) {
    setTimeout(() => {
      servicesAccList.style.height = elementHeight + "px";
    }, 100);
  } else {
    servicesAccList.style.height = "0";
  }
});
