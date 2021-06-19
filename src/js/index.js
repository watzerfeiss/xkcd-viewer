import { redirectTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { fetchStrip, getLatestStrip } from "./api";
import { beginUpdatingStrip, updateDisplayedStrip } from "./strip-display";

import "./navbar";
import { updateNavbar } from "./navbar";

beginUpdatingStrip();

onNavigate((address) => {
  validateRequest(address).then((validAddress) => {
    if (address !== validAddress) {
      return redirectTo(validAddress);
    }

    getLatestStrip().then((latestStrip) => {
      latestNum = latestStrip.num;
      displayedNum = parseInt(validAddress) || latestNum;

      updateNavbar(displayedNum, latestNum);
    });

    beginUpdatingStrip();
    fetchStrip(validAddress)
      .then((strip) => {
        updateDisplayedStrip(strip);
      })
      .catch(() => {
        updateDisplayedStrip(null);
      });
  });
});
