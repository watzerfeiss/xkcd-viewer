const QUERY_PARAMETER = "n";

const listeners = [];
const callListeners = () => listeners.forEach((listener) => listener());

const navigateTo = (address) => {
  console.log(`navigating to ${address}`);
  history.pushState(
    null,
    null,
    address ? `?${QUERY_PARAMETER}=${encodeURIComponent(address)}` : "?"
  );

  callListeners();
};

const redirectTo = (address) => {
  console.log(`redirecting to ${address}`);
  history.replaceState(
    null,
    null,
    address ? `?${QUERY_PARAMETER}=${encodeURIComponent(address)}` : "?"
  );

  callListeners();
};

const onNavigate = (callback) => {
  const listener = () => {
    const address = new URL(location).searchParams.get(QUERY_PARAMETER) || "";
    callback(address);
  };

  listeners.push(listener);
  return () => listeners.filter((item) => item !== listener);
};

window.addEventListener("DOMContentLoaded", callListeners);
window.addEventListener("popstate", callListeners);

export { navigateTo, redirectTo, onNavigate };
