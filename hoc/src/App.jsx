import Greeting from "./Greeting"
import GreetingWithStyle from "./GreetingWithStyle"
import PostListWithData from "./PostListWithData"
import Dashboard from "./Dashboard"
import withAuth from "./hoc/withAuth"


const ProctedDashboard = withAuth(Dashboard)

function App() {

  return (
    <>
      <Greeting name="Pravind Kumar" />
      <GreetingWithStyle name="Pravind Kumar" />
      <ProctedDashboard />
      <PostListWithData />
    </>
  )
}

export default App
