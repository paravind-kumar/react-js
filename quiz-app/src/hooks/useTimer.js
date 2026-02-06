import { useState,useEffect } from 'react'

export default function useTimer(sec) {
    const [time, setTime] = useState(sec)

    useEffect(() => {
        if(time === 0) return;
        const intervel = setInterval(() => setTime(prev => prev - 1), 1000)
        return () => clearInterval(intervel)
    }, [time])
  return {time, reset: () => setTime(sec)}
}
