import { navigateTo, onNavigate } from "./hash-navigation";
import { validateRequest } from "./strip-request-validation";
import { getCurrentStripData, getStripDataByNumber } from "./api";

onNavigate((address) => {
  validateRequest(address).then((validAddress) => {
    if (address !== validAddress) {
      return navigateTo(validAddress);
    }

    getStripDataByNumber(validAddress).then(console.log);
  });
});
