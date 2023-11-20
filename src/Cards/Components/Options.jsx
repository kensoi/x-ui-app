import { Button, Content } from "@webx/components";
import { useToolKit } from "@webx/toolkit";

export default function OptionBox() {
  const toolkit = useToolKit()

  const props = {
    title: "Закрыть",
    theme: "white",
    onClick: () => toolkit.card.return()
  };

  return <Content className="option-box">
    <Button {...props} />
  </Content>;
}
