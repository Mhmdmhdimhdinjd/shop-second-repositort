import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
// import App from './App.jsx'
import Apptest from './Apptest.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Apptest/>
  </StrictMode>,
)
