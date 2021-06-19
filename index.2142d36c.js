// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5tOvd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _hashNavigation = require("./hash-navigation");
var _stripRequestValidation = require("./strip-request-validation");
var _api = require("./api");
var _stripDisplay = require("./strip-display");
var _navbar = require("./navbar");
_hashNavigation.onNavigate((address)=>{
    _stripRequestValidation.validateRequest(address).then((validAddress)=>{
        if (address !== validAddress) return _hashNavigation.redirectTo(validAddress);
        _api.getLatestStrip().then((latestStrip)=>{
            latestNum = latestStrip.num;
            displayedNum = parseInt(validAddress) || latestNum;
            _navbar.updateNavbar(displayedNum, latestNum);
        });
        _stripDisplay.beginUpdatingStrip();
        _api.fetchStrip(validAddress).then((strip)=>{
            _stripDisplay.updateDisplayedStrip(strip);
        }).catch(()=>{
            _stripDisplay.updateDisplayedStrip(null);
        });
    });
});

},{"./hash-navigation":"53n3p","./strip-request-validation":"35D5S","./api":"2IiKm","./strip-display":"3lMmB","./navbar":"2D4rW"}],"53n3p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigateTo", ()=>navigateTo
);
parcelHelpers.export(exports, "redirectTo", ()=>redirectTo
);
parcelHelpers.export(exports, "onNavigate", ()=>onNavigate
);
const QUERY_PARAMETER = "n";
const listeners = [];
const callListeners = ()=>listeners.forEach((listener)=>listener()
    )
;
const navigateTo = (address)=>{
    history.pushState(null, null, address ? `#${encodeURIComponent(address)}` : "#");
    callListeners();
};
const redirectTo = (address)=>{
    history.replaceState(null, null, address ? `#${encodeURIComponent(address)}` : "#");
    callListeners();
};
const onNavigate = (callback)=>{
    const listener = ()=>{
        const address = location.hash.slice(1) || "";
        callback(address);
    };
    listeners.push(listener);
    return ()=>listeners.filter((item)=>item !== listener
        )
    ;
};
window.addEventListener("DOMContentLoaded", callListeners);
window.addEventListener("popstate", callListeners);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"35D5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateRequest", ()=>validateRequest
);
var _api = require("./api");
const validateRequest = (address)=>{
    return _api.getLatestStrip().then(({ num: maxNum  })=>{
        const requestedNumber = parseInt(address);
        const isRequestedNumberValid = !isNaN(requestedNumber) && requestedNumber >= 1 && requestedNumber <= maxNum;
        if (isRequestedNumberValid) return address;
        else if (address === "random") return Math.floor(Math.random() * maxNum + 1).toString();
        else return "";
    });
};

},{"./api":"2IiKm","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"2IiKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchStrip", ()=>fetchStrip
);
parcelHelpers.export(exports, "getLatestStrip", ()=>getLatestStrip
);
const PROXY_URL = "https://eigencors.herokuapp.com/";
const LATEST_STRIP_LIFETIME = 300000;
let latestStrip = null;
let latestStripTimestamp = Date.now();
const request = (url)=>{
    return fetch(`${PROXY_URL}${url}`).then((response)=>response.json()
    ).catch(()=>{
        throw new Error("Failed to load comic data");
    });
};
const getLatestStrip = ()=>{
    const isLatestStripStale = !latestStrip || Date.now() - latestStripTimestamp > LATEST_STRIP_LIFETIME;
    if (isLatestStripStale) return request("https://xkcd.com/info.0.json").then((strip)=>{
        latestStrip = strip;
        latestStripTimestamp = Date.now();
        return strip;
    });
    return Promise.resolve(latestStrip);
};
const fetchStrip = (num)=>num ? request(`https://xkcd.com/${num}/info.0.json`) : getLatestStrip()
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"3lMmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "beginUpdatingStrip", ()=>beginUpdatingStrip
);
parcelHelpers.export(exports, "updateDisplayedStrip", ()=>updateDisplayedStrip
);
var _transcriptParser = require("./transcript-parser");
const stripPlaceholder = document.querySelector("[data-strip-placeholder]");
const stripPlaceholderMessage = document.querySelector("[data-strip-placeholder-message]");
const stripContainer = document.querySelector(".strip");
const transcriptToggleBtn = stripContainer.querySelector("[data-strip-view-toggle]");
const imageContainer = stripContainer.querySelector("[data-strip-image]");
const transcriptContainer = stripContainer.querySelector("[data-strip-transcript]");
const titleNumberElement = stripContainer.querySelector("[data-strip-number]");
const titleElement = stripContainer.querySelector("[data-strip-title]");
const dateElement = stripContainer.querySelector("[data-strip-date]");
const altTextElement = stripContainer.querySelector("[data-strip-alt-text]");
const sourceLink = stripContainer.querySelector("[data-strip-source-link]");
const explainLink = stripContainer.querySelector("[data-strip-explain-link]");
const beginUpdatingStrip = ()=>{
    stripPlaceholder.style.display = null;
    stripContainer.style.display = "none";
    stripPlaceholder.style.display = null;
    stripContainer.style.display = "none";
    stripPlaceholder.classList.add("strip-placeholder--loading");
    stripPlaceholder.classList.remove("strip-placeholder--error");
    stripPlaceholderMessage.textContent = "Loading...";
};
const updateDisplayedStrip = (stripData)=>{
    if (!stripData) {
        stripPlaceholder.style.display = null;
        stripContainer.style.display = "none";
        stripPlaceholder.classList.remove("strip-placeholder--loading");
        stripPlaceholder.classList.add("strip-placeholder--error");
        stripPlaceholderMessage.textContent = "Failed to load strip data";
        return;
    }
    stripPlaceholder.style.display = "none";
    stripContainer.style.display = null;
    const image = new Image();
    image.src = stripData.img;
    imageContainer.innerHTML = "";
    if (stripData.link) {
        const link = document.createElement("a");
        link.href = stripData.link;
        link.target = "blank";
        link.appendChild(image);
        imageContainer.appendChild(link);
    } else imageContainer.appendChild(image);
    transcriptContainer.innerHTML = _transcriptParser.parseTranscript(stripData.transcript);
    titleNumberElement.textContent = `#${stripData.num}:`;
    titleElement.innerHTML = `${stripData.title}`;
    const { year , month , day  } = stripData;
    const postedDate = new Date(year, month - 1, day);
    dateElement.textContent = `Posted on ${postedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })}`;
    altTextElement.textContent = stripData.alt;
    sourceLink.href = `https://xkcd.com/${stripData.num}`;
    explainLink.href = `https://www.explainxkcd.com/wiki/index.php/${stripData.num}`;
};
const toggleTranscript = ()=>{
    imageContainer.classList.toggle("visually-hidden");
    transcriptContainer.classList.toggle("visually-hidden");
    transcriptToggleBtn.classList.toggle("toggle-btn--image");
    transcriptToggleBtn.classList.toggle("toggle-btn--transcript");
};
transcriptToggleBtn.addEventListener("click", toggleTranscript);

},{"./transcript-parser":"6MiB7","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6MiB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseTranscript", ()=>parseTranscript
);
const parseTranscript = (rawText)=>{
    if (!rawText) return "<em>No transcript available</em>";
    return rawText// remove the alt-text transcript, as it's handled separately
    .replace(/{{[^{]*?([aA]lt|[tT]itle)[\ -]?([tT]ext)*:[^}]*?}}/, "").trim()// escape angle brackets
    .replaceAll(/(?<!\<)\<(?!\<)/g, "&lt;").replaceAll(/(?<!\>)\>(?!\>)/g, "&gt;").replaceAll(/\<\<([\w\W]*?)\>\>/g, "<code>$1</code>").replaceAll(/\[\[([\w\W]*?)\]\]/g, "<strong>$1</strong>").replaceAll(/\(\(([\w\W]*?)\)\)/g, "<em>$1</em>").replaceAll(/\{\{([\w\W]*?)\}\}/g, "<em><strong>$1</strong></em>")//split into paragraphs
    .split("\n\n")// replace single newlines with breaks
    .map((p)=>`<p>${p.replaceAll("\n", "<br>")}</p>`
    ).join("");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"2D4rW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateNavbar", ()=>updateNavbar
);
var _hashNavigation = require("./hash-navigation");
const navbar = document.querySelector(".navigation");
const links = navbar.querySelectorAll("a");
links.forEach((link)=>{
    link.addEventListener("click", (evt)=>{
        evt.preventDefault();
        if (link.hasAttribute("href")) _hashNavigation.navigateTo(link.href.split("#")[1]);
    });
});
const firstLink = navbar.querySelector("[data-navlink-first]");
const prevLink = navbar.querySelector("[data-navlink-prev]");
const nextLink = navbar.querySelector("[data-navlink-next]");
const latestLink = navbar.querySelector("[data-navlink-latest]");
const updateNavbar = (displayedStripNum, latestStripNum)=>{
    if (displayedStripNum === 1) {
        prevLink.removeAttribute("href");
        firstLink.removeAttribute("href");
    } else {
        prevLink.href = `#${displayedStripNum - 1}`;
        firstLink.href = "#1";
    }
    if (displayedStripNum === latestStripNum) {
        nextLink.removeAttribute("href");
        latestLink.removeAttribute("href");
    } else {
        nextLink.href = `#${displayedStripNum + 1}`;
        latestLink.href = "#";
    }
};

},{"./hash-navigation":"53n3p","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}]},["5tOvd","3L8AI"], "3L8AI", "parcelRequired1e2")

//# sourceMappingURL=index.2142d36c.js.map
