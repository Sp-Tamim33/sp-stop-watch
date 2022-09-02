import React, { useEffect, useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [start, setStart] = useState(false)


    // start
    useEffect(() => {
        if (start) {
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
    }, [start, second, minute, hour])


    return (
        <div>
            <h1 className='heading'>Stop Watch</h1>
            <div id="mainstopwatch">
                <div className="mainTime">
                    <span>{hour < 10 ? '0' + hour : hour}</span>
                    <span>{minute < 10 ? '0' + minute : minute}</span>
                    <span>{second < 10 ? '0' + second : second}</span>
                </div>
                <br />
                <button onClick={() => setStart(true)}>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;