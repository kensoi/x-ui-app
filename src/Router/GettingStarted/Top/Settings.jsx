import { useToolKit } from "@webx/toolkit";
import { Button } from "@webx/components";
import Card from "~/Cards/Settings";
import Icon from "@webx/icons/SettingsIcon"

export default function () {
    const toolkit = useToolKit();

    const buttonProps = {
        icon: <Icon />,
        theme: "transparent",
        onClick: () => {
            toolkit.card.show(<Card />);
        }
    };

    return <Button {...buttonProps} />;
}
