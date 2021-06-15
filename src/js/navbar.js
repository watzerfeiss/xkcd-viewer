import { navigateTo, onNavigate } from "./hash-navigation";

const navbar = document.querySelector(".navigation");

const links = navbar.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    navigateTo(new URL(link.href).searchParams.get("n"));
  });
});

const prevLink = navbar.querySelector("[data-navlink-prev]");
const nextLink = navbar.querySelector("[data-navlink-next]");

const updateNavbar = (displayedStripNum, latestStripNum) => {
  prevLink.href = `?n=${displayedStripNum - 1}`;
  nextLink.href = `?n=${displayedStripNum + 1}`;
};

export { updateNavbar };
