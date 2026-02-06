import { createContext, useContext, useState } from 'react'

const TheamContext = createContext()

function Theam() {
    const [theam, setTheam] = useState("light")
  return (
    <>
        <TheamContext.Provider value={{theam, setTheam}}>
            <Toolbar />
        </TheamContext.Provider>
    </>
  )
}

function Toolbar() {
    return <TheamButton />
}

function TheamButton() {
    const {theam, setTheam} = useContext(TheamContext)
    return(
        <>
            <button
                onClick={() => setTheam(theam==="light" ? "dark" : "light")}
                style={{
                    backgroundColor: theam === "light" ? "#fff" : "#333",
                    color: theam === "light" ? "#333" : "#fff"
                }}
            >Current Theam: {theam}</button>
        </>
    )
}

export default Theam