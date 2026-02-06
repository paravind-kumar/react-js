import { useState, useEffect, useEffectEvent } from 'react'

function Timer() {
    const [count, setCount] = useState(0)

    const onTick = useEffectEvent(() => {
        console.log("Count:", count)
        setCount(c => c + 1)
    })

    useEffect(() => {
        const id = setInterval(() => {
            onTick();            
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    
  return (
    <h2>Timer: {count}</h2>
  )
}

export default Timer