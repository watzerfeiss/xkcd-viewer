const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

let latestStrip = null;
let latestStripTimestamp = Date.now();

const request = (url) => {
  return fetch(`${PROXY_URL}${url}`)
    .then((response) => response.json())
    .catch(() => {
      throw new Error("Failed to load comic data");
    });
};

const getLatestStrip = () => {
  const isLatestStripStale =
    !latestStrip || Date.now() - latestStripTimestamp > 1000 * 60 * 5;
  console.log(isLatestStripStale);
  if (isLatestStripStale) {
    return request("https://xkcd.com/info.0.json").then((strip) => {
      latestStrip = strip;
      return strip;
    });
  }
  return Promise.resolve(latestStrip);
};

const fetchStrip = (num) =>
  num ? request(`https://xkcd.com/${num}/info.0.json`) : getLatestStrip();

export { fetchStrip, getLatestStrip };
