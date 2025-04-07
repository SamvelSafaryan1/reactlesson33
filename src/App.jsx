import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return(
    <>
    <Layout/>
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
