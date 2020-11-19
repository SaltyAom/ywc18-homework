import {h} from "../../../../web_modules/preact.js";
import SearchBar from "./searchBar/index.js";
import "./app-bar.css.proxy.js";
const AppBar = () => {
  return /* @__PURE__ */ h("header", {
    id: "app-bar"
  }, /* @__PURE__ */ h(SearchBar, null));
};
export default AppBar;
