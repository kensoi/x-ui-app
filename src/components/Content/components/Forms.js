import { XButton } from "../../XForms"
import XBlock from "../../XBlock";

function CardResponseBlock(props) {
    if (props.toolkit.cardResponse) {
      return (
        <XBlock>
          Card Response: {JSON.stringify(props.toolkit.cardResponse)}
        </XBlock>
      );
    }
  }

export default function FormTests(props) {
    return (
      <>
        <CardResponseBlock toolkit={props.toolkit} />
        <XBlock>
          <h1>Тестовые компоненты</h1>
          <p>
            <XButton onClick={() => props.toolkit.showCard("slider")}>
              Тестовый ползунок
            </XButton>
          </p>
        </XBlock>
      </>
    );
  }