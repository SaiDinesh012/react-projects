import { useState } from 'react'

import viteLogo from '/vite.svg'

import Header from './components/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
  </>
  )
}

export default App
