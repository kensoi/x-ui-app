import { useState } from "react";
import { Footer } from "./components/x-ui/Footer";
import { Header } from "./components/x-ui/Header";
import { CardArticle, CardAH, CardAP } from "./components/x-ui/CardArticle";
import "./components/x-ui/css/global.css";
import { AppContent } from "./AppContent";
import { XList } from "./components/x-ui/XList";
import XButton from "./components/x-ui/XButton";

function CSSTheme(theme_mode) {
    switch (theme_mode) {
        case "l":
            return "light"

        case "d":
            return "dark"

        case "r":
            return "rose" // Даша привет)
        
        default:
            return "auto"
    }
}

function App() {
    const [cardArticleState, setCardArticleState] = useState(true);
    const [enableHeader, setHeaderState] = useState(true);
    const [enableFooter, setFooterState] = useState(false);
    const [colorSchema, setColorSchema] = useState("a");

    const toolkit = {
        colorSchema: colorSchema, setColorSchema : setColorSchema,
        cardArticleState: cardArticleState, setCardArticleState: setCardArticleState,
        enableHeader: enableHeader, setHeaderState: setHeaderState,
        enableFooter: enableFooter, setFooterState: setFooterState,
    }
    return <div className="x-ui">
        <div className={`app-layout ${CSSTheme(toolkit.colorSchema)}`}>
            <Header toolkit={toolkit}/>
            <AppContent toolkit={toolkit}/>
            <Footer toolkit={toolkit}/>
        </div>
        <CardArticle enabled={cardArticleState} onClose={setCardArticleState}>
            <CardAH> 
                О приложении 
            </CardAH>
            <CardAP> 
                Данный репозиторий служит демонстрацией компонентов X-UI (название в следствии может быть изменено), а также может быть использован в качестве шаблона для других приложений.
            </CardAP>
            <CardAP> 
                По всем вопросам можно будет обратиться к автору программы. Чтобы закрыть эту карточку-статью, нажмите на красный кружок.
            </CardAP>
            <CardAP> 
                <XList>
                    <XButton 
                            onClick={() => window.open("https://github.com/kensoi")}>
                        Разработчик
                    </XButton>
                    <XButton 
                            onClick={() => window.open("https://github.com/kensoi/x-ui-app")}>
                        Репозиторий
                    </XButton>
                </XList>
            </CardAP>
        </CardArticle>
    </div>
}
export default App;
