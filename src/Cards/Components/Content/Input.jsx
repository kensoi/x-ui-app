import { Label } from "@webx/components";

export default function InputContent() {
  const props = {
    type: "text",
    name: "price",
    placeholder: "Try to input..."
  };

  return <>
    <Label>
      Input
    </Label>
    <input {...props} />
  </>;
}
