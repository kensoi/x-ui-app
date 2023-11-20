import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import Card from "~/Cards/Components";


export default function () {
    const toolkit = useToolKit();

    const buttonProps = {
        title: "Components",
        onClick: () => {
            toolkit.card.show(<Card />);
        }
    };

    return <Button {...buttonProps} />;
}
