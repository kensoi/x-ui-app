import XButtonObject from "./components/XButton";
import XDropdownObject from "./components/XDropdown";
import XFieldObject from "./components/XField";
import XSliderObject from "./components/XSlider";
import XTumblerObject from "./components/XTumbler";

export function XButton(props) {
  return <XButtonObject {...props} />;
}

export function XDropdown(props) {
  return <XDropdownObject {...props} />;
}

export function XField(props) {
  return <XFieldObject {...props} />;
}

export function XSlider(props) {
  return <XSliderObject {...props} />;
}

export function XTumbler(props) {
  return <XTumblerObject {...props} />;
}
