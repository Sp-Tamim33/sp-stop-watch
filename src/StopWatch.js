import React, { useEffect, useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(true);


    // start
    useEffect(() => {
        if (start && !stop) {
            var timer;
            timer = setInterval(() => {
                setSecond(second + 1)
                if (second === 59) {
                    setMinute(minute + 1)
                    setSecond(0)
                    if (minute === 59) {
                        setHour(hour + 1)
                        setMinute(0)
                    }
                }
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [start, second, minute, hour, stop])


    // reset
    const reset = () => {
        setSecond(0)
        setMinute(0)
        setHour(0)
        setStop(true)
    }
    return (
        <div>
            <h1 className='heading'>Stop Watch</h1>
            <div id="mainstopwatch">
                <div className="mainTime">
                    <div><p>Hour</p> <span>{hour < 10 ? '0' + hour : hour}</span></div>
                    <div><p>Minutes</p> <span>{minute < 10 ? '0' + minute : minute}</span></div>
                    <div><p>Seconds</p> <span>{second < 10 ? '0' + second : second}</span></div>
                </div>
                <br />
                <div className='buttons'>
                    <button onClick={() => { setStart(true); setStop(false) }}>Start</button>
                    <button onClick={() => setStop(true)}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;