const listeners = [];
const callListeners = () => listeners.forEach((listener) => listener());

const navigateTo = (address) => {
  history.pushState(
    null,
    null,
    address ? `#${encodeURIComponent(address)}` : "#"
  );

  callListeners();
};

const redirectTo = (address) => {
  history.replaceState(
    null,
    null,
    address ? `#${encodeURIComponent(address)}` : "#"
  );

  callListeners();
};

const onNavigate = (callback) => {
  const listener = () => {
    const address = location.hash.slice(1) || "";
    callback(address);
  };

  listeners.push(listener);
  return () => listeners.filter((item) => item !== listener);
};

window.addEventListener("DOMContentLoaded", callListeners);
window.addEventListener("popstate", callListeners);

export { navigateTo, redirectTo, onNavigate };
