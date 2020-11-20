import {h, Fragment} from "../../../web_modules/preact.js";
import AppBar from "./appBar/index.js";
import Breadcrumb from "./breadcrumb/index.js";
import Aside from "./aside/index.js";
import "./app-layout.css.proxy.js";
const AppLayout = ({children}) => {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(AppBar, null), /* @__PURE__ */ h(Breadcrumb, null), /* @__PURE__ */ h("h3", {
    class: "main-title"
  }, "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E14\u0E37\u0E48\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("main", {
    id: "layout"
  }, /* @__PURE__ */ h(Aside, null), children), /* @__PURE__ */ h("footer", null));
};
export default AppLayout;
