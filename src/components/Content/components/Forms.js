import { XButton } from "../../XForms"
import XBlock, { Headline, Paragraph } from "../../XBlock";

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
          <Headline>Тестовые компоненты</Headline>
          <Paragraph>
            <XButton onClick={() => props.toolkit.showCard("slider")}>
              Тестовый ползунок
            </XButton>
          </Paragraph>
        </XBlock>
      </>
    );
  }