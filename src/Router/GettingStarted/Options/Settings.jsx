import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import Card from "~/Cards/Settings";


export default function () {
    const toolkit = useToolKit();

    const buttonProps = {
        title: "Settings",
        onClick: () => {
            toolkit.card.show(<Card />);
        }
    };

    return <Button {...buttonProps} />;
}
