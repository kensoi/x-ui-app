import GettingStarted from "./GettingStarted"
import LanguageConfig from "./LanguageConfig"


export default [
    {
        path: "/*",
        element: <GettingStarted />
    },
    {
        path: "/language",
        exact: true,
        element: <LanguageConfig />
    }
]