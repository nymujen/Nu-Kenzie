import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Dashboard } from './components/Dashboard/Dashboard'

function App() {
  const [ page, setPage ] = useState("LandingPage")
  const [ values, setValues ] = useState([])

  return (
    <div className="App">
      {
        page === "LandingPage" ? (
          <LandingPage setPage={setPage} />
        ): (
          <Dashboard setPage={setPage} setValues={setValues} values={values} />
        )
      }
    </div>
  )
}

export default App
