import { useState } from "react";
import { Footer } from "./components/x-ui/Footer";
import { Header } from "./components/x-ui/Header";
import { CardArticle, CardAH, CardAP } from "./components/x-ui/CardArticle";
import "./components/x-ui/css/global.css";
import { AppContent } from "./AppContent";

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
    return <div className={"x-ui"}>
        <div className={"app-layout"}>
            <Header toolkit={toolkit}/>
            <AppContent toolkit={toolkit}/>
            <Footer toolkit={toolkit}/>
        </div>
        <CardArticle enabled={cardArticleState} onClose={setCardArticleState}>
            <CardAH> 
                Тестовая карточка-статья 
            </CardAH>
            <CardAP> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardAP>
            <CardAP> 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </CardAP>
        </CardArticle>
    </div>
}
export default App;
