import { Card, Content, Grid } from "@webx/components"

import DropdownContent from "./Content/Dropdown"
import InputContent from "./Content/Input"
import OptionBox from "./Options"
import TumblerContent from "./Content/Tumlber"


export default function () {
    return <>
        <h4>
            Компоненты
        </h4>
        <Card>
            <Content>
                <Grid>
                    <InputContent />
                    <TumblerContent />
                    <DropdownContent />
                </Grid>
            </Content>
            <OptionBox />
        </Card>
    </>
}