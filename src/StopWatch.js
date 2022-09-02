import React from 'react';
import './StopWatch.css'

const StopWatch = () => {
    return (
        <div>
            <h1 className='heading'>Stop Watch</h1>
            <div id="mainstopwatch">
                <div className="mainTime">
                    <span id="mainminute">00</span>
                    <span id="mainsecond">00</span>
                    <span id="milliseconds">00</span>
                </div>
                <br />
                <button id="start">Start</button>
                <button id="stop">Stop</button>
                <button id="reset">Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;