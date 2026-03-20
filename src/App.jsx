import { useState } from 'react'
import './App.css'

// Simple SVG logo component
const Logo = () => (
  <svg 
    width="100" 
    height="100" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '20px auto', display: 'block' }}
  >
    <circle cx="50" cy="50" r="45" fill="#61DAFB" />
    <path 
      d="M50 20L65 40H55V60H65L50 80L35 60H45V40H35L50 20Z" 
      fill="white"
    />
  </svg>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Logo />
      <h1>Vite + React App</h1>
      <p className="subtitle">Your app is running successfully!</p>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <p className="info">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
