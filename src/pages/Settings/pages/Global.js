import {
    CardBlock,
} from "@webx-ui/forms"

import Headline from "../components/Headline"

export default function Global () {
    return <div className="settings-wrapper">
        <Headline title="Основные" />
        <CardBlock className="settings-page options">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    {"{"} Название опции {"}"}
                </div>
                <div className="options-grid-item">
                    {"{"} Название настройки {"}"}
                </div>
            </div>
      </CardBlock>
    </div>
}