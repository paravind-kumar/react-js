import Hello from './Hello'
import Bye from './Bye'
import Button from './Button'

function Message(){
  alert("Hello from Message Box")
}

function App() {

  const isLoginedIn = 1;

  const hobbies = ['Reading', 'Traveling', 'Gaming'];

  if(isLoginedIn){
      return (
        <>
          <Hello name = "Pravind Kumar" age = "23" city = "Lucknow" hobbies={hobbies} />
          <Button label="Click Me!" handleClick={Message} />
        </>
      )
  } else {
    return <Bye />
  }
}

export default App