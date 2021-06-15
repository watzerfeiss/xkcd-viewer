const stripContainer = document.querySelector(".strip");

const image = stripContainer.querySelector(".strip__image");
const transcriptContainer = stripContainer.querySelector(".strip__transcript");
const titleElement = stripContainer.querySelector(".strip__title");
const dateElement = stripContainer.querySelector(".strip__date");
const altTextElement = stripContainer.querySelector(".strip__alt-text");
const sourceLink = stripContainer.querySelector(".strip__source-link");

const updateDisplayedStrip = (stripData) => {
  image.src = stripData.img;
  transcriptContainer.textContent = stripData.transcript;
  titleElement.innerHTML = `#${stripData.num}: ${stripData.title}`;

  const { year, month, day } = stripData;
  const postedDate = new Date(year, month - 1, day);
  dateElement.textContent = `Posted on ${postedDate.toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  )}`;
  altTextElement.textContent = stripData.alt;
  sourceLink.href = `https://xkcd.com/${stripData.num}`;
};

export { updateDisplayedStrip };
