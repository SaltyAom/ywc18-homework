import {h} from "../../../../../web_modules/preact.js";
import "./choice.css.proxy.js";
const Choice = ({value, onSelect, active = false}) => {
  let select = () => {
    onSelect(value);
  };
  return /* @__PURE__ */ h("button", {
    class: `choice ${active ? "-active" : ""}`,
    onClick: select
  }, /* @__PURE__ */ h("div", {
    class: "radio"
  }, /* @__PURE__ */ h("div", {
    class: "activation"
  })), /* @__PURE__ */ h("p", {
    class: "value"
  }, value));
};
export default Choice;
