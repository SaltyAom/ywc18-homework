import {h, render} from "../web_modules/preact.js";
import "../web_modules/preact/devtools.js";
import {Landing} from "./pages/index.js";
import {AppProvider, AppLayout} from "./layouts/index.js";
import "./styles/base.css.proxy.js";
import "./styles/abstraction.css.proxy.js";
render(/* @__PURE__ */ h(AppProvider, null, /* @__PURE__ */ h(AppLayout, null, /* @__PURE__ */ h(Landing, null))), document.getElementById("root"));
