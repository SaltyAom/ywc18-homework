import {h} from "../../../web_modules/preact.js";
import {StoreProvider} from "../../stores/index.js";
const AppProvider = ({children}) => {
  return /* @__PURE__ */ h(StoreProvider, null, children);
};
export default AppProvider;
