const mobileMenuLink = document.querySelector(".site__hamburger");
const mobileMenuList = document.querySelector(".site__nav-list");

const toggleMobileMenu = (e) => {
  mobileMenuLink.classList.toggle("site__hamburger--open");
  mobileMenuList.classList.toggle("site__nav-list--show");
};

mobileMenuLink.addEventListener("click", toggleMobileMenu);
