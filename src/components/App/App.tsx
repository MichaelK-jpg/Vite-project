import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { FAJNA_ZMIENNA } from '@components/fajny'
import { Button } from '../Button'
import { Box } from '../box'

function App({children}: {children: JSX.Element}) {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)
  // Opcja 1 - fajna, trochę nieczytelna
  const [counters, setCounters] = useState<[number, number]>([0, 0])
  // Opcja 2 - troszkę trudniejsza, bardziej czytelna
  const [betterCounters, setBetterCounters] = useState({
    'first': 0,
    'second': 0,
  })
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
      {children}
      <div className="card">
        <button onClick={() => setBetterCounters((counters) => ({ ...counters, first: counters.first + 1}))}>
          count is {betterCounters.first}
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
