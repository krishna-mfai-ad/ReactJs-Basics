import React, { useState } from 'react'

function NumInDe() {


    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c=>c+1);   //Updater Function Pending State to Update State Function passed as an arguement to setState(()=>{})
        setCount(c=>c+1);

        // setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="NumInDe">
            <p>
                {count}
            </p>
            <div className="btnNum">
                <button onClick={incrementCount}>
                    Increment
                </button>
                <button onClick={decrementCount}>
                    Decrement
                </button>
                <button onClick={resetCount}>
                    Reset
                </button>
            </div>
        </div>
    );

}

export default NumInDe