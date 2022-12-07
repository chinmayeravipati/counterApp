import {  useState } from "react";

const Counter = () => {  
    const [count,setCount] = useState(0);
    const [inputValue,setInputValue] = useState("")
    const increaseByOne = () => {
        if(inputValue!=="")
        setCount(count + parseInt(inputValue));
    };
    const decreaseByOne = () =>
    {
        if(inputValue!=="")
        setCount(count - parseInt(inputValue));
    };
    return(
        <div>
            <p>{count}</p>
            <input type="number" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }}/>
            <button onClick={increaseByOne}>increase</button>
            <button onClick={decreaseByOne}>decrease</button>
            <button onClick={()=>{
                setCount(0);
                setInputValue("")
                }}>Reset</button>
        </div>
    );
};
export default Counter;