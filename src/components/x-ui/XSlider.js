import { useState } from "react";
import "./scss/x-slider.scss";


export function XSlider (props) {

    let min = props.min;
    let max = props.max;

    const [value, setValue] = useState(min);

    function handleChange (event) {
        setValue(event.target.value)
    }

    return <div className="x-slider">
        <div className="x-slider-input">
            <input type="range" min={min} max={max} value={value} onChange={handleChange}/>
        </div>
        <div className="x-slider-output">
            {value}
        </div>
    </div>
}