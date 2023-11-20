import { useToolKit } from "@webx/toolkit";

import { Button } from "@webx/components";
import Icon from "@webx/icons/CloseIcon"


export default function () {
    const toolkit = useToolKit();
    
    const buttonProps = {
        icon: <Icon />,
        theme: "transparent",
        alt: "CloseIcon",
        onClick: () => {
            toolkit.card.return()
        }
    };

    return <Button {...buttonProps} />;
}
