import React,{useState} from 'react'
import './style.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementHandle = () => {
        setCount(count+1)
    }
    const decrementHandle = () => {
         count>0 ? setCount(count-1) : setCount(0)
    }
    return (
        <>
           <div className="mainContainer">
               <div className="buttonContainer">
                   <button onClick={incrementHandle}>INCR</button>
                   <span>{count}</span>
                   <button onClick={decrementHandle}>DECR</button>
               </div>
           </div>
        </>
    )
}

export default Counter
