import {h} from "../../../../web_modules/preact.js";
import {useReducer} from "../../../../web_modules/preact/hooks.js";
import DropDownSelect from "./select/index.js";
import {ExpandIcon} from "../../../icons/index.js";
import "./dropdown.css.proxy.js";
const DropDown = ({
  name,
  className = "",
  Icon = null,
  value = [],
  onSelect = () => null,
  children
}) => {
  let [isOpen, toggleOpen] = useReducer((state) => !state, false);
  return /* @__PURE__ */ h("button", {
    class: `dropdown ${className}`,
    onClick: toggleOpen,
    tabIndex: isOpen ? -1 : 1
  }, /* @__PURE__ */ h("p", {
    class: "title",
    for: name
  }, Icon, /* @__PURE__ */ h("span", null, children)), /* @__PURE__ */ h(ExpandIcon, null), /* @__PURE__ */ h("div", {
    class: `select ${isOpen ? "-open" : ""}`
  }, value.map((option) => /* @__PURE__ */ h(DropDownSelect, {
    key: value,
    option,
    onSelect
  }))));
};
export default DropDown;
