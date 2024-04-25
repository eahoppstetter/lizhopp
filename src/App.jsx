import './App.css'
import { Route, Routes }  from 'react-router-dom'
import HappyCanDay from './components/HappyCanDay'

function App() {

  return (
    <>
    <Routes>
      <Route path="/countdown" element={<HappyCanDay/>}/>
    </Routes>
    </>
  )
}

export default App
