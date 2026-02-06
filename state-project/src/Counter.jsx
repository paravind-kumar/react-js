import { useState } from "react"



    function Counter () {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1);
    } 

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button style={{margin: "10px"}} onClick={increase}>Increase</button>
            <button style={{margin: "10px"}} onClick={decrease}>Decrease</button>
        </div>
    )

}
export default Counter;