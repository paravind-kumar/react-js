import { useState, useEffect } from 'react'

export default function WindowSizeTraker() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [])

  return (
    <div>
        <h1>Window Size Tracker</h1>
        <h2>Window Width: {width}px</h2>
    </div>
  )
}
