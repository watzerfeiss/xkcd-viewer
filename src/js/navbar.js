const navbar = document.querySelector(".navigation");

const firstLink = navbar.querySelector("[data-navlink-first]");
const prevLink = navbar.querySelector("[data-navlink-prev]");
const nextLink = navbar.querySelector("[data-navlink-next]");
const latestLink = navbar.querySelector("[data-navlink-latest]");

const updateNavbar = (displayedStripNum, latestStripNum) => {
  if (displayedStripNum === 1) {
    prevLink.removeAttribute("href");
    firstLink.removeAttribute("href");
  } else {
    prevLink.href = `#${displayedStripNum - 1}`;
    firstLink.href = "#1";
  }

  if (displayedStripNum === latestStripNum) {
    nextLink.removeAttribute("href");
    latestLink.removeAttribute("href");
  } else {
    nextLink.href = `#${displayedStripNum + 1}`;
    latestLink.href = "#";
  }
};

export { updateNavbar };
