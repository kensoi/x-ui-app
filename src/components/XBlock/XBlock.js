import "./scss/x-block.scss";

export function XBlock(props) {
  return <div className="x-block">{props.children}</div>;
};

export function Headline(props) {
  return <div className="headline">{props.children}</div>;
};

export function Subline(props) {
  return <div className="subline">{props.children}</div>;
};

export function Paragraph(props) {
  return <div className="paragraph">{props.children}</div>;
};
