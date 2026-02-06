import { useState, useEffect } from 'react'

export default function First() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
        console.log("Component Mounted or Updated")
    }, [count])

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
