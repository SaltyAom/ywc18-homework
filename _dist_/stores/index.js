import {createStoreon} from "../../web_modules/storeon.js";
import search2 from "./search/index.js";
export const store = createStoreon([search2]);
export {default as StoreProvider} from "./provider.js";
export {
  search2 as search
};
