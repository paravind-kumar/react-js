import { useState } from "react";

export default function useToggle(initislValue = false){
    const [value, setValue] = useState(initislValue)

    const toggle = () => setValue(prev => !prev)

    return [value, toggle]
}