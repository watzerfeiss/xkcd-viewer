import { parseTranscript } from "./transcript-parser";

const stripPlaceholder = document.querySelector("[data-strip-placeholder]");
const stripPlaceholderMessage = document.querySelector(
  "[data-strip-placeholder-message]"
);

const stripContainer = document.querySelector(".strip");

const transcriptToggleBtn = stripContainer.querySelector(
  "[data-strip-view-toggle]"
);
const imageContainer = stripContainer.querySelector("[data-strip-image]");
const transcriptContainer = stripContainer.querySelector(
  "[data-strip-transcript]"
);

const titleNumberElement = stripContainer.querySelector("[data-strip-number]");
const titleElement = stripContainer.querySelector("[data-strip-title]");

const dateElement = stripContainer.querySelector("[data-strip-date]");
const altTextElement = stripContainer.querySelector("[data-strip-alt-text]");
const sourceLink = stripContainer.querySelector("[data-strip-source-link]");
const explainLink = stripContainer.querySelector("[data-strip-explain-link]");

const beginUpdatingStrip = () => {
  stripPlaceholder.style.display = null;
  stripContainer.style.display = "none";

  stripPlaceholder.classList.add("strip-placeholder--loading");
  stripPlaceholder.classList.remove("strip-placeholder--error");
  stripPlaceholder.classList.remove("strip-placeholder--404");
  stripPlaceholderMessage.textContent = "Loading...";
};

const updateDisplayedStrip = (err, stripData) => {
  if (err) {
    stripPlaceholder.style.display = null;
    stripContainer.style.display = "none";

    if (err.message === "404") {
      stripPlaceholder.classList.remove("strip-placeholder--loading");
      stripPlaceholder.classList.add("strip-placeholder--404");
      stripPlaceholderMessage.textContent = "Not Found";
      return;
    }

    stripPlaceholder.classList.remove("strip-placeholder--loading");
    stripPlaceholder.classList.add("strip-placeholder--error");
    stripPlaceholderMessage.textContent = "Error loading strip data";
    return;
  }

  stripPlaceholder.style.display = "none";
  stripContainer.style.display = null;

  const image = new Image();
  image.src = stripData.img;
  imageContainer.innerHTML = "";

  if (stripData.link) {
    const link = document.createElement("a");
    link.href = stripData.link;
    link.target = "blank";
    link.appendChild(image);
    imageContainer.appendChild(link);
  } else {
    imageContainer.appendChild(image);
  }
  transcriptContainer.innerHTML = parseTranscript(stripData.transcript);

  titleNumberElement.textContent = `#${stripData.num}:`;
  titleElement.innerHTML = `${stripData.title}`;
  document.title = `${stripData.num}: ${stripData.title} - xkcd viewer`

  const { year, month, day } = stripData;
  const postedDate = new Date(year, month - 1, day);
  dateElement.textContent = `Posted on ${postedDate.toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  )}`;
  altTextElement.textContent = stripData.alt;

  sourceLink.href = `https://xkcd.com/${stripData.num}`;
  explainLink.href = `https://www.explainxkcd.com/wiki/index.php/${stripData.num}`;
};

const toggleTranscript = () => {
  imageContainer.classList.toggle("visually-hidden");
  transcriptContainer.classList.toggle("visually-hidden");

  transcriptToggleBtn.classList.toggle("toggle-btn--image");
  transcriptToggleBtn.classList.toggle("toggle-btn--transcript");
};
transcriptToggleBtn.addEventListener("click", toggleTranscript);

export { beginUpdatingStrip, updateDisplayedStrip };
