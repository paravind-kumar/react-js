import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import UseContext from './UseContext.jsx'
import Theam from './Theam.jsx'
import Navbar from './auth-example/Navbar.jsx'
import { AuthProvider } from './auth-example/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseContext /> */}
    {/* <Theam /> */}
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  </StrictMode>,
)
