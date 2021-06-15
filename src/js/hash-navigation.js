const addNavigationListener = (callback) => {
  const listener = (evt) => {
    const hash = evt.newURL.split("#")[1];
    callback(hash);
  };

  window.addEventListener("DOMContentLoaded", listener);
  window.addEventListener("hashchange", listener);

  return () => {
    window.removeEventListener("DOMContentLoaded", listener);
    window.removeEventListener("hahchange", listener);
  };
};

export { addNavigationListener };
