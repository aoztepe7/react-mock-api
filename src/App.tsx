import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchMenu } from './components/SearchMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <SearchMenu />
      </div>
    </div>
  )
}

export default App
