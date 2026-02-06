import { useNavigate } from 'react-router-dom'
export default function Home() {

    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={goToAbout}>Go To About Page</button>
    </div>
  )
}
