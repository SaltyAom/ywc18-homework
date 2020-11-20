import {h} from "../../../../../web_modules/preact.js";
import {SearchIcon} from "../../../../icons/index.js";
import "./search-bar.css.proxy.js";
const SearchBar = () => {
  const placeholder = "\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E0A\u0E37\u0E48\u0E2D \u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E14\u0E37\u0E48\u0E21 \u0E23\u0E49\u0E32\u0E19\u0E18\u0E07\u0E1F\u0E49\u0E32 \u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32 OTOP \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B";
  return /* @__PURE__ */ h("form", {
    id: "search-bar"
  }, /* @__PURE__ */ h("input", {
    class: "input",
    type: "search",
    name: "Search",
    placeholder,
    autoComplete: "off",
    enterKeyHint: "search"
  }), /* @__PURE__ */ h("button", {
    class: "action",
    type: "submit"
  }, /* @__PURE__ */ h(SearchIcon, null)));
};
export default SearchBar;
