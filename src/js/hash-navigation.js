const navigateTo = (address) => {
  location.hash = `#${encodeURIComponent(address)}`;
};

const onNavigate = (callback) => {
  const listener = () => {
    const hash = location.hash.split("#")[1] || "";
    callback(hash);
  };

  window.addEventListener("DOMContentLoaded", listener);
  window.addEventListener("hashchange", listener);

  return () => {
    window.removeEventListener("DOMContentLoaded", listener);
    window.removeEventListener("hashchange", listener);
  };
};

export { navigateTo, onNavigate };
