const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

const request = (url) => {
  return fetch(`${PROXY_URL}${url}`)
    .then((response) => response.json())
    .catch(() => {
      throw new Error("Failed to load comic data");
    });
};

const getStripData = (num) =>
  num
    ? request(`https://xkcd.com/${num}/info.0.json`)
    : request("https://xkcd.com/info.0.json");

export { getStripData };
