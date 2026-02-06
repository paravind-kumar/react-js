import { useState } from "react"
function Parent() {
  const [text, setText] = useState("")
  
  return(
    <div>
      <InputBox onChange={setText} />
      <Display value={text} />
    </div>
  )
}

function InputBox({ onChange }) {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />
}

function Display({value}) {
  return <h2>Typed: {value}</h2>
}

function App() {
  
  return (
    <>
      <Parent />
    </>
  )
}

export default App
