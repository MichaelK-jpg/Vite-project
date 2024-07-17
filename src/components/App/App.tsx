import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './'
import { FAJNA_ZMIENNA } from '../fajny'
import { Button } from '../Button'
import { Box } from '../Box'

function App() {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)
  const handleClick = () => {
    setSecondCount(secondCount + 1)
  }; 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {FAJNA_ZMIENNA}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button label="Test" />
        <Box count={count} onClick={handleClick}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
