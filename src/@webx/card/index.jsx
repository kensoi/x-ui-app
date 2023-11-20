import "./stylesheet.scss"

import {
    useToolKit
} from "@webx/toolkit"

function Card () {
    const toolkit = useToolKit()

    const offsetStyle = {
        top: toolkit.card.offset
    }

    const CardWrapperClassList = ["card-wrapper"]

    if (toolkit.card.loaded) {
        CardWrapperClassList.push("visible")
    }

    return <div
            className={CardWrapperClassList.join(" ")}
            style={offsetStyle}
    >
        <div className="card-layout">
            {
                toolkit.card.layout
            }
        </div>
    </div>
}

function CardWrapperBG () {
    const toolkit = useToolKit()

    const classList = ["card-wrapper-bg"]
    
    if (toolkit.card.loaded) {
        classList.push("visible")
    }

    return <div
            className={classList.join(" ")}
    />
}

export default function CardWrapper () {
    return <>
        <CardWrapperBG />
        <Card />
    </>
}