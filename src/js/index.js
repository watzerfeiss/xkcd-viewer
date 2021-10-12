import { redirectTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { fetchStrip, getLatestStrip } from "./api";
import { beginUpdatingStrip, updateDisplayedStrip } from "./strip-display";

import "./navbar";
import { updateNavbar } from "./navbar";

onNavigate((address) => {
  beginUpdatingStrip();

  validateRequest(address).then((validAddress) => {
    if (address !== validAddress) {
      return redirectTo(validAddress);
    }

    getLatestStrip().then((latestStrip) => {
      latestNum = latestStrip.num;
      displayedNum = parseInt(validAddress) || latestNum;

      updateNavbar(displayedNum, latestNum);
    });

    fetchStrip(validAddress)
      .then((strip) => {
        updateDisplayedStrip(null, strip);
      })
      .catch((err) => {
        updateDisplayedStrip(err, null);
      });
  });
});
