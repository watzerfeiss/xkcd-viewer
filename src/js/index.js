import { redirectTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { getStripData } from "./api";
import { updateDisplayedStrip } from "./strip-display";

import "./navbar";
import { updateNavbar } from "./navbar";

onNavigate((address) => {
  validateRequest(address).then((validAddress) => {
    console.log(address, validAddress);
    if (address !== validAddress) {
      return redirectTo(validAddress);
    }

    getStripData(validAddress).then((stripData) => {
      updateDisplayedStrip(stripData);
      getStripData().then((latestStripData) => {
        displayedNum = stripData.num;
        latestNum = latestStripData.num;

        updateNavbar(displayedNum, latestNum);
      });
    });
  });
});
