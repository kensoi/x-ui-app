import { useState } from "react";
import "./scss/x-slider.scss";
import { handleChange } from "./Utils";

function XSlider (props) {
    let min = props.min;
    let max = props.max;

    const [value, setValue] = useState(min);

    return <div className="x-slider">
        <div className="x-slider-input">
            <input type="range" min={min} max={max} value={value} onChange={handleChange(setValue)}/>
        </div>
        <div className="x-slider-output">
            {value}
        </div>
    </div>
}

export default XSlider;