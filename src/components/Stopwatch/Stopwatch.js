import React from "react";
import Display from "../Display/Display";
import Button from "../Btn/Button";

const Stopwatch = ({time, isRun, start, stop, reset, wait}) => {
    return (
        <div className="mainSection">
            <div className="clockHolder">
                <div className="stopwatch">
                    <Display time={time}/>
                    <Button isRun={isRun}
                            start={start}
                            stop={stop}
                            reset={reset}
                            wait={wait}/>
                </div>
            </div>
        </div>
    );

}

export default Stopwatch;
