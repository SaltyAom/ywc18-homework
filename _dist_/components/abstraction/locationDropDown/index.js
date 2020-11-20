import {h} from "../../../../web_modules/preact.js";
import {DropDown} from "../../base/index.js";
import {LocationIcon} from "../../../icons/index.js";
const LocationDropDown = (props) => {
  let {Icon, ...rest} = props;
  let value = ["\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E01\u0E25\u0E49\u0E09\u0E31\u0E19", "\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E"];
  let onSelect = (value2) => {
    console.log(value2);
  };
  return /* @__PURE__ */ h(DropDown, {
    name: "Location",
    value,
    onSelect,
    Icon: /* @__PURE__ */ h(LocationIcon, null),
    ...rest
  }, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E01\u0E25\u0E49\u0E09\u0E31\u0E19");
};
export default LocationDropDown;
