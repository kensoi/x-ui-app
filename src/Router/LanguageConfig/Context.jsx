import {
    useContext, createContext, useState
} from "react"


const RawLanguageContext = createContext()

export function LanguageContext ({children}) {
    const state = useState("unset")

    return <RawLanguageContext.Provider value={state}>
        {children}
    </RawLanguageContext.Provider>
}

export function useLanguage () {
    return useContext(RawLanguageContext)
}