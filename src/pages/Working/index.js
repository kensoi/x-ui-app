import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button,
    CardBlock
} from "@webx-ui/forms"

import "./stylesheet.scss"

export default function Working() {
    const toolkit = useToolKit()

    function MoveToSettingsButton() {
        function onClick() {
            toolkit.app.goTo(toolkit.app.path + "/settings")
        }

        return <Button 
                title="Перейти в настройки"
                onClick={onClick}
        />
    }

    return <div className="working">
        <CardBlock>
            <h1>
                Приложение успешно создано!
            </h1>
            <p>
                Попробуйте что нибудь импортировать на страницу.
            </p>
            <MoveToSettingsButton/>
        </CardBlock>
    </div>
}