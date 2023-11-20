import { Button, Card, Label, Dropdown } from "@webx/components";

export default function DropdownContent() {
  const buttonProps = {
    title: "Important thing!",
    theme: "white",
    isDropdown: true,
  };

  const props = {
    children: <Button {...buttonProps} />,
    position: "bottom",
    orientation: "right",
    content: <Card>
      <p>
        I love Gingerbreads!
      </p>
    </Card>
  };

  return <>
    <Label>
      Dropdown content
    </Label>
    <Dropdown {...props} />
  </>;
}
