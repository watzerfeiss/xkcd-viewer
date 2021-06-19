const listeners = [];
const callListeners = () => listeners.forEach((listener) => listener());

const navigateTo = (address) => {
  location.hash = `#${encodeURIComponent(address)}`;
};

const redirectTo = (address) => navigateTo(address);

const onNavigate = (callback) => {
  const listener = () => {
    const address = location.hash.slice(1) || "";
    callback(address);
  };

  listeners.push(listener);
  return () => listeners.filter((item) => item !== listener);
};

window.addEventListener("DOMContentLoaded", callListeners);
window.addEventListener("hashchange", callListeners);

export { navigateTo, redirectTo, onNavigate };
