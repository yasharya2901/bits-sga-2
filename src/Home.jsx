import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <h1>My Application</h1>
      <div className="card">
        <div className='counter-button'>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
            <p>{count}</p>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <button className='card-button' onClick={() => navigate('/about')}>
          Go to another page
        </button>
        
      </div>
    </>
  )
}

export default Home
