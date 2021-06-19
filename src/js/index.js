import { redirectTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { fetchStrip, getLatestStrip } from "./api";
import { beginUpdatingStrip, updateDisplayedStrip } from "./strip-display";

import "./navbar";
import { updateNavbar } from "./navbar";

onNavigate((address) => {
  validateRequest(address).then((validAddress) => {
    if (address !== validAddress) {
      return redirectTo(validAddress);
    }

    console.log(beginUpdatingStrip());
    fetchStrip(validAddress).then((strip) => {
      updateDisplayedStrip(strip);
      getLatestStrip().then((latestStrip) => {
        displayedNum = strip.num;
        latestNum = latestStrip.num;

        updateNavbar(displayedNum, latestNum);
      });
    });
  });
});
