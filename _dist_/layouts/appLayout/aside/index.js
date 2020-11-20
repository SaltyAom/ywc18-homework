import {h} from "../../../../web_modules/preact.js";
import {DropDown, ChoiceGroup} from "../../../components/base/index.js";
import {LocationDropDown} from "../../../components/abstraction/index.js";
import "./aside.css.proxy.js";
const Aside = () => {
  return /* @__PURE__ */ h("aside", {
    id: "aside"
  }, /* @__PURE__ */ h("h4", {
    class: "sub-title"
  }, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32"), /* @__PURE__ */ h(ChoiceGroup, {
    choices: ["a", "b", "c"],
    onSelect: (e) => console.log(e)
  }), /* @__PURE__ */ h("h4", {
    class: "sub-title"
  }, "\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14 / \u0E43\u0E01\u0E25\u0E49\u0E09\u0E31\u0E19"), /* @__PURE__ */ h(LocationDropDown, null), /* @__PURE__ */ h("h4", {
    class: "sub-title"
  }, "\u0E23\u0E32\u0E04\u0E32"), /* @__PURE__ */ h(DropDown, {
    name: "Price",
    onSelect: () => {
    },
    value: []
  }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01"), /* @__PURE__ */ h("h4", {
    class: "sub-title"
  }, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E14\u0E37\u0E48\u0E21"), /* @__PURE__ */ h(ChoiceGroup, {
    choices: ["a", "b", "c"],
    onSelect: (e) => console.log(e)
  }));
};
export default Aside;
