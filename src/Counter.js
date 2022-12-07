import { useState } from "react";
const Counter = () => {  
    const [count,setCount] = useState(0);
    const increaseByOne = () => {
        setCount(count + 1);
    };
    const decreaseByOne = () =>
    {
        setCount(count - 1);
    };
    return(
        <div>
            <p>{count}</p>
            <button onClick={increaseByOne}>increase</button>
            <button onClick={decreaseByOne}>decrease</button>
        </div>
    );


};
export default Counter;