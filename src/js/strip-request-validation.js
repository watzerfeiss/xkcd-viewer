import { getLatestStrip } from "./api";

const validateRequest = (address) => {
  return getLatestStrip().then(({ num: maxNum }) => {
    const requestedNumber = parseInt(address);
    const isRequestedNumberValid =
      !isNaN(requestedNumber) &&
      requestedNumber >= 1 &&
      requestedNumber <= maxNum;

    if (isRequestedNumberValid) {
      return address;
    } else if (address === "random") {
      return Math.floor(Math.random() * maxNum + 1).toString();
    } else {
      return "";
    }
  });
};

export { validateRequest };
