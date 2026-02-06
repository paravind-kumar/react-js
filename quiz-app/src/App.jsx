import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import QuizProvider from "./context/QuizContext"
import Home from "./pages/Home"
import LeaderBoard from "./pages/LeaderBoard"
import Quiz from "./pages/Quiz"
const Result = lazy(() => import("./pages/Result"))

function App() {

  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <Suspense fallback={<h2 className="text-center mt-5">Loading...</h2>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QuizProvider>
    </>
  )
}

export default App
