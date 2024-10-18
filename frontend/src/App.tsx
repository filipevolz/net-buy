import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultFormLayout } from './components/DefaultFormLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <DefaultFormLayout /> }/>
        <Route path='/signup' element={ <DefaultFormLayout /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
