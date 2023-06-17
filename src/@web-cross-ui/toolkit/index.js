import "schema/index.scss"

import {
    useReducer,
    useState
} from "react"

import {
    useToolKit, getToolKitContext
} from "./context"

import CardWrapper from "@web-cross-ui/card"
import useAppAPI from "./app"

import {
    MountTransition
} from "@web-cross-ui/transitions"

import {
    getScreenDeviceType
} from "./screen-device-type"

class ToolKit {
    #card
    #settings
    #toolDict

    constructor (cardPartition, settingsPartition) {
        this.#card = cardPartition
        this.#settings = settingsPartition
        this.#toolDict = {}

        Object.defineProperties(this, {
            card: {
                get: () => this.#card
            },

            settings: {
                get: () => this.#settings
            }
        })
    }

    setPartition (name, partition) {
        this.#toolDict[name] = partition
        Object.defineProperty(
            this, name, {
                get: () => this.#toolDict[name],
                configurable: true
            }
        )
    }

    get () {
        return {
            card: this.#card,
            settings: this.#settings,
            ...this.#toolDict
        }
    }
}

function Wrapper ({children, mount, loaded}) {
    return <MountTransition
        mountState={mount}
        visibilityState={loaded}
        className="index"
    >
        {
            children
        }
    </MountTransition>
}

function ToolKitContext ({children}) {
    const toolkit = new ToolKit()
    const app = useAppAPI()

    Object.defineProperty(toolkit, "app", {
        get: () => app
    })

    const layoutClassList = ["webx"]
    layoutClassList.push("theme-" + toolkit.app.theme)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ")

    window.addEventListener('load', function () {
        toolkit.app.show()
    })

    window.onbeforeunload = () => {
        toolkit.app.hide()
    }
    
    return <getToolKitContext.Provider value={toolkit}>
        <Wrapper mount={toolkit.app.mounted} loaded={toolkit.app.loaded}>
            {
                children
            }
        </Wrapper>
        <CardWrapper />
    </getToolKitContext.Provider>
}

function usePartition (name, partition) {
    const toolkit = useToolKit()

    toolkit.setPartition(name, partition)
}

export {
    ToolKitContext, useToolKit, usePartition
}