import { navigateTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { getStripData } from "./api";
import { updateDisplayedStrip } from "./strip-display";

onNavigate((address) => {
  validateRequest(address).then((validAddress) => {
    if (address !== validAddress) {
      return navigateTo(validAddress);
    }

    getStripData(validAddress).then(updateDisplayedStrip);
  });
});
