import React from "react";
import style from "./Stopwatch.module.css"

const Stopwatch = () => {
    return (
        <div className={style.stopwatchWrapper}>
            <div>
                <h1>Stopwatch</h1>
            </div>
            <div>00:00:00</div>
            <div className={style.button}>
                <button>Start</button>
                <button>Wait</button>
                <button>Reset</button>
            </div>
        </div>
    );
}
export default Stopwatch;