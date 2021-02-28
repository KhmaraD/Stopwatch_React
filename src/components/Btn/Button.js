import React from "react";

const Button = (props) => {
    return (
        <div className="buttonWrapper">
            {!props.isRun
                ? <button onClick={props.start}>Start</button>
                : <button onClick={props.stop}>Stop</button>
            }
            <button onClick={props.wait}>Wait</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}
export default Button;