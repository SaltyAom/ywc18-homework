import {h} from "../../web_modules/preact.js";
import {StoreContext} from "../../web_modules/storeon/preact.js";
import {store} from "./index.js";
const StoreProvider = ({children}) => /* @__PURE__ */ h(StoreContext.Provider, {
  value: store
}, children);
export default StoreProvider;
