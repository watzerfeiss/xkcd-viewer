import { getStripList } from "./api";

const MAX_RESULTS = 20;

const searchContainer = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const searchResults = document.querySelector(".search__results");

let isSearching = false;

const resetSearch = () => {
  searchResults.innerHTML = "";
  searchContainer.classList.add("search--idle");
};

searchContainer.classList.add("search--idle");

searchInput.addEventListener("input", (evt) => {
  resetSearch();

  const value = evt.target.value;
  if (!value || isSearching) {
    return;
  }

  isSearching = true;
  getStripList().then((list) => {
    isSearching = false;
    let results = list
      .filter((strip) =>
        strip.title.toLowerCase().includes(searchInput.value.toLowerCase())
      )
      .slice(0, MAX_RESULTS);

    console.log(results);

    results.forEach((result) => {
      const resultItem = document
        .querySelector("#search_result_template")
        .content.cloneNode(true);

      const resultLink = resultItem.querySelector(".search__link");
      const resultNumber = resultItem.querySelector(".search__result-number");
      const resultText = resultItem.querySelector(".search__result-text");

      resultLink.href = `#${result.number}`;
      resultNumber.textContent = `#${result.number}`;
      resultText.textContent = result.title;
      resultLink.addEventListener("click", () => {
        resetSearch();
      });

      searchResults.appendChild(resultItem);
    });

    if (results.length) {
      searchContainer.classList.remove("search--idle");
    }
  });
});

document.addEventListener("focusout", (evt) => {
  if (!searchContainer.contains(evt.relatedTarget)) {
    resetSearch();
  }
});
