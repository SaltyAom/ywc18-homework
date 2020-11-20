import {Fragment, h} from "../../../../web_modules/preact.js";
import "./breadcrumb.css.proxy.js";
const Breadcrumb = () => {
  let paths = ["\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01", "\u0E04\u0E49\u0E19\u0E2B\u0E32"];
  return /* @__PURE__ */ h("nav", {
    id: "breadcrumb"
  }, paths.map((path, index) => /* @__PURE__ */ h(Fragment, {
    key: path
  }, /* @__PURE__ */ h("p", {
    class: `path ${index < paths.length - 1 ? "-link" : "-current"}`
  }, path), index < paths.length - 1 && /* @__PURE__ */ h("p", {
    class: "seperator"
  }, " / "))));
};
export default Breadcrumb;
