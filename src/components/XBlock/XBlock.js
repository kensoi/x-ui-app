import "./scss/x-block.scss";
import "./scss/separators.scss";

import HeadlineObject from "./components/Headline";
import SublineObject from "./components/Subline";
import ParagraphObject from "./components/Paragraph";
import XRawObject from "./components/XRaw";
import XListObject from "./components/XList";

export function Headline(props) {
  return <HeadlineObject {...props} />;
}

export function Subline(props) {
  return <SublineObject {...props} />;
}

export function Paragraph(props) {
  return <ParagraphObject {...props} />;
}

export function XRaw(props) {
  return <XRawObject {...props} />;
}

export function XList(props) {
  return <XListObject {...props} />;
}

export default function XBlock(props) {
  return <div className="x-block">{props.children}</div>;
}
