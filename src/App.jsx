import { useState } from 'react'
import './App.css'
import Goals from './components/Goals/goals'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Goals />
      </div>
    </>
  )
}

export default App
