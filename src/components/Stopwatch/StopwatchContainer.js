import React, {useState, useEffect} from "react";
import Stopwatch from "./Stopwatch";

const StopwatchContainer = () => {
    const [time, setTime] = useState(0); // data of stopwatch
    const [isRun, setIsRun] = useState(false); // flag to start stopwatch
    const [isClick, setIsClick] = useState(false); // flag on double click "wait" button

    useEffect(() => {
        let interval = null;

        if (isRun) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1000)
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRun]);

    const start = () => {
        setIsRun(true);
    }

    const stop = () => {
        setIsRun(false);
        setTime(0);
    }

    const reset = () => {
        setTime(0);
        setIsRun(true);
    }

    const wait = () => {
        setIsClick(true);

        setTimeout(() => {
            if (isClick) {
                setIsRun(false);
                setIsClick(false);
            }
            setIsClick(false);
        }, 300);
    }

    return <Stopwatch time={time}
                      isRun={isRun}
                      start={start}
                      stop={stop}
                      reset={reset}
                      wait={wait}/>
}

export default StopwatchContainer;
