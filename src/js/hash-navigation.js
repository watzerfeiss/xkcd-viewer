const addNavigationListener = (callback) => {
  const listener = (evt) => {
    const hash = evt.newURL.split("#")[1];
    callback(hash && !isNaN(parseInt(hash)) ? hash : null);
  };

  window.addEventListener("hashchange", listener);

  return () => window.removeEventListener("hahchange", listener);
};

export { addNavigationListener };
