import React from "react";
import style from "./Display.module.css"

const Display = (props) => {
    return (
        <div className={style.displayWrapper}>
            <h1>Stopwatch</h1>
            <div>
                <span>{("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>
            </div>
        </div>
    );
}
export default Display;
