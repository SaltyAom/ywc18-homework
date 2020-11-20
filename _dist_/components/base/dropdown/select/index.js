import {h} from "../../../../../web_modules/preact.js";
const Select = ({onSelect, option}) => {
  let select = () => {
    onSelect(option);
  };
  return /* @__PURE__ */ h("button", {
    onClick: select,
    class: "option"
  }, option);
};
export default Select;
