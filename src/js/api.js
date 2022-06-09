const PROXY_URL = "https://eigencors.herokuapp.com/";
const LATEST_STRIP_LIFETIME = 1000 * 60 * 5;
const LIST_URL = "https://xkcd.com/archive/";

let latestStrip = null;
let latestStripTimestamp = Date.now();

let stripList = null;

const request = (url, asText = false) => {
  return fetch(`${PROXY_URL}${url}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return asText ? response.text() : response.json();
  });
};

const getLatestStrip = () => {
  const isLatestStripStale =
    !latestStrip || Date.now() - latestStripTimestamp > LATEST_STRIP_LIFETIME;

  if (isLatestStripStale) {
    return request("https://xkcd.com/info.0.json").then((strip) => {
      latestStrip = strip;
      latestStripTimestamp = Date.now();
      return strip;
    });
  }
  return Promise.resolve(latestStrip);
};

const fetchStrip = (num) =>
  num ? request(`https://xkcd.com/${num}/info.0.json`) : getLatestStrip();

const getStripList = () => {
  if (stripList) {
    return Promise.resolve(stripList.slice());
  }

  return request(LIST_URL, true).then((archiveHtml) => {
    const archiveDoc = new DOMParser().parseFromString(
      archiveHtml,
      "text/html"
    );

    const fetchedList = Array.from(archiveDoc.links)
      .filter((link) => {
        return (
          link.pathname.match(/^\/[0-9]+\/$/) &&
          new Date(link.title).toString() !== "Invalid Date"
        );
      })
      .map((link) => ({
        number: link.pathname.slice(1, link.pathname.length - 1),
        date: new Date(link.title),
        title: link.textContent
      }));
    stripList = fetchedList;
    return fetchedList;
  });
};

export { fetchStrip, getLatestStrip, getStripList };
