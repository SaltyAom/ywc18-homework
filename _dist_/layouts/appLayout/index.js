import {h, Fragment} from "../../../web_modules/preact.js";
import AppBar from "./appBar/index.js";
import Breadcrumb from "./breadcrumb/index.js";
const AppLayout = ({children}) => {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(AppBar, null), /* @__PURE__ */ h(Breadcrumb, null), /* @__PURE__ */ h("main", null, /* @__PURE__ */ h("aside", null), children), /* @__PURE__ */ h("footer", null));
};
export default AppLayout;
