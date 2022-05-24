import React, { useState } from 'react';

const App = () => {

    let curTime = new Date().toLocaleTimeString()
    const [time, settime] = useState(curTime)

    const getTime = () => {
        let curTime = new Date().toLocaleTimeString()
        settime(curTime)
    }
    setInterval(getTime, 1000)
    return (
        <>
            <h1 className='curTime'>Current Time</h1>
            <h1 className='time'>{time}</h1>
            {/* <button onClick={getTime}>Get Time</button> */}
        </>)
}

export default App