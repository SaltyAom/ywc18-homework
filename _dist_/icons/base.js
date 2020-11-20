import {h} from "../../web_modules/preact.js";
const IconBase = ({children, outline = false}) => /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  class: "icon",
  fill: !outline ? "currentColor" : "transparent",
  stroke: outline ? "currentColor" : "transparent"
}, children);
export default IconBase;
