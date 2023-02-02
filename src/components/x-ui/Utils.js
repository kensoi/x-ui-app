
export function handleChange (setState) {
    return event => setState(event.target.value)
}

export function ToggleBool (state, setState) {
    switch (state) {
        case true:
            setState(false)
            break;

        default:
            setState(true)
    }
}

export function CheckValue (value, defaultOption, notDefaultOption) {
    switch (value) {
        case defaultOption:
            return defaultOption;

        default:
            return notDefaultOption;
    }
}