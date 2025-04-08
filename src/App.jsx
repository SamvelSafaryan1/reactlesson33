import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import FilmPage from './pages/FilmPage/FilmPage'

function App() {

  return(
    <>
    <Layout/>
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<FilmPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
