import { addNavigationListener } from "./hash-navigation";
import { getCurrentStripData, getStripDataByNumber } from "./api";

addNavigationListener((hash) => {
  (hash ? getStripDataByNumber(hash) : getCurrentStripData()).then(console.log);
});
