import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);

        if (minutes === 1) {
            return () => clearInterval(timer);
        }
    }, [seconds,minutes]);

    return (
        <div className="timer-container">
            <p>{minutes < 10 ? '0' + minutes : minutes} :</p>
            <p>{seconds < 10 ? '0' + seconds : seconds}</p>
        </div>
    );
};
export default Timer;
