import { Button } from "@webx/components";
import Icon from "@webx/icons/CloseIcon"

export default function () {
    const buttonProps = {
        icon: <Icon />,
        theme: "transparent",
        alt: "CloseIcon"
    };

    return <Button {...buttonProps} />;
}
