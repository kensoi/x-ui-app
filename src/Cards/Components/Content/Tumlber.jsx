import { Label, Tumbler } from "@webx/components";
import { useState } from "react";

export default function TumblerContent() {
  const [state, setState] = useState(false);
  const props = {
    state: state, setState: setState
  };

  return <>
    <Label>
      Tumbler
    </Label>
    <Tumbler {...props} />
  </>;
}
