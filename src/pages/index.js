import "./stylesheet.scss"

import useToolkitPartitions from "utils/useToolkitPartitions"

import Working from "./Working"
import NotFound from "./NotFound"
import Settings from "./Settings"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

export default function Router () {
    useToolkitPartitions()
    
    return <BrowserRouter>
        <Routes>
            <Route exact path="/template/" element={<Working />} />
            <Route exact path="/template/settings" element={<Settings />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}