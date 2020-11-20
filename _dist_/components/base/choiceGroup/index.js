import {h} from "../../../../web_modules/preact.js";
import {useState} from "../../../../web_modules/preact/hooks.js";
import Choice from "./choice/index.js";
import "./choice-group.css.proxy.js";
const ChoiceGroup = ({choices = [], onSelect}) => {
  let [selected, updateSelected] = useState("");
  let handleSelect = (value) => {
    if (value === selected)
      return;
    updateSelected(value);
    onSelect(value);
  };
  return /* @__PURE__ */ h("section", {
    class: "choice-group"
  }, choices.map((choice2) => /* @__PURE__ */ h(Choice, {
    key: choice2,
    value: choice2,
    onSelect: handleSelect,
    active: selected === choice2
  })));
};
export default ChoiceGroup;
